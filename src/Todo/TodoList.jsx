import { IoMdCheckbox } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
const TodoList = ({ key, tasks, handleDelete }) => {
  return (
    <li className="todo-item">
      {tasks}
      <button className="check-btn">
        <IoMdCheckbox />
      </button>
      <button className="delete-btn" onClick={() => handleDelete(tasks)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
export default TodoList;
