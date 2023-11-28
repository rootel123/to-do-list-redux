import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateTodo from "./components/Createtodo";
import { getTodos } from "./redux/appThunk";
import TodoCard from "./components/TodoCard";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos) return;

    dispatch(getTodos());
  }, [todos, dispatch]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div
      className="border-2 border-gray-300 min-h-[90vh] max-w-screen-md mx-auto mt-10 flex flex-col items-center rounded-2xl"
      style={{
        backgroundImage: `url(${"./images/e.jpg"})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <CreateTodo />
      <ul className="mt-12 flex flex-col gap-6 h-[25rem] overflow-y-auto scrollbar-hide">
        {todos?.map((v, i) => (
          <TodoCard
            key={i}
            id={v.id}
            index={i}
            title={v.title}
            isDone={v.isDone}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
