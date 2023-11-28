import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleDone, updateTodo } from "../redux/appThunk";
import { useState } from "react";

const TodoCard = ({ index, id, title, isDone }) => {
  const [updateToggle, setUpdateToggle] = useState(false);
  const [newTodo, setNewTodo] = useState(title);

  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  const onClickUpdateToggle = () => {
    setUpdateToggle(!updateToggle);
  };

  const onSubmitUpdateTodo = (e) => {
    e.preventDefault();

    if (!newTodo || newTodo === title) return;

    dispatch(updateTodo({ todoId: id, title: newTodo }));

    setNewTodo(newTodo);
    setUpdateToggle(false);
  };

  const onClickDelete = () => {
    dispatch(deleteTodo({ todoId: id }));
  };

  return (
    <li
      className={`w-[345px] py-2 text-xl flex ${
        index % 2 ? "text-orange-500" : "text-yellow-400"
      }`}
    >
      <span className="w-1/12 inline-block text-red-700">★</span>
      {updateToggle ? (
        <form className="w-7/12 flex" onSubmit={onSubmitUpdateTodo}>
          <input
            className="w-3/4 px-4 py-[2px] text-base rounded-lg ml-8 text-black focus:outline-none border-2 border-gray-400 focus:border-black"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="w-1/4 ml-2 text-white hover:text-gray-500"
            type="submit"
          >
            <FiEdit3 />
          </button>
        </form>
      ) : (
        <button
          className={`w-7/12 ${isDone && "line-through"}`}
          onClick={onClickIsDone}
        >
          {title}
        </button>
      )}
      <button
        className="w-2/12 hover:text-gray-500 "
        onClick={onClickUpdateToggle}
      >
        {updateToggle ? (
          <div className="text-white hover:text-gray-500">취소</div>
        ) : (
          <div className="px-5 text-white hover:text-gray-500">
            <FiEdit3 />
          </div>
        )}
      </button>
      <button
        className="w-2/12 px-5 text-white hover:text-gray-500"
        onClick={onClickDelete}
      >
        <FiTrash2 />
      </button>
    </li>
  );
};

export default TodoCard;
