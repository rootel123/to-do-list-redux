import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/appThunk";
import { setNewTodo } from "../redux/appSlice";
import { FaPlus } from "react-icons/fa";

const CreateTodo = () => {
  const { newTodo } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    dispatch(createTodo({ title: newTodo }));
    dispatch(setNewTodo(""));
  };

  return (
    <form className="pt-20 flex" onSubmit={onSubmitCreateTodo}>
      <input
        className="px-4 py-2 text-2xl focus:outline-none border-2 border-gray-400 focus:border-black rounded-lg"
        type="text"
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <button className="ml-4 px-4 py-3 bg-blue-300 hover:bg-blue-400 active:bg-blue-300 rounded-xl">
        <FaPlus />
      </button>
    </form>
  );
};

export default CreateTodo;
