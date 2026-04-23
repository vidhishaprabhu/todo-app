import { IoMdCheckbox } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import './Todo.css'
const TodoList = ({ tasks, handleDelete,checked,onHandleChecked }) => {
  return (
    <li className="todo-item">
      <span className={tasks.checked?"checkList":"not-checkList"}>{tasks.content}</span>
      <button className="check-btn" onClick={()=>onHandleChecked(tasks.id)}>
        <IoMdCheckbox />
      </button>
      <button className="delete-btn" onClick={() => handleDelete(tasks.id)}>
        <MdDeleteForever />
      </button>
      
    </li>
  );
};
export default TodoList;
