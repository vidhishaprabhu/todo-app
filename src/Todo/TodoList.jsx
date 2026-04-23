import { IoMdCheckbox } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
const TodoList = ({ tasks, handleDelete }) => {
  return (
    <li className="todo-item">
      {tasks.content}
      <button className="check-btn">
        <IoMdCheckbox />
      </button>
      <button className="delete-btn" onClick={() => handleDelete(tasks.id)}>
        <MdDeleteForever />
      </button>
      
    </li>
  );
};
export default TodoList;
