import { useEffect, useState } from "react";
import "./Todo.css";
import { IoMdCheckbox } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dataTime, setDateTime] = useState("");
  const handleInput = (value) => {
    setInputValue(value);
  };
  const handleClearBtn=()=>{
    setTask([]);
  }
  const handleDelete=(value)=>{
    console.log(task)
    console.log(value)
    const updatedVal=task.filter((curVal)=>{
      return (
        curVal!==value
      )
    })
    setTask(updatedVal)
  }
  
  useEffect(() => {
    const interval=setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return ()=>clearInterval(interval)
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prev) => [...prev, inputValue]);

    setInputValue("");
  };
  return (
    <section className="todo-container">
      <header className="header">
        <h2>Todo List</h2>
      </header>
      <h2>{dataTime}</h2>
      <form onSubmit={handleSubmit}>
        <section>
          <input
            type="text"
            className="todo-input"
            value={inputValue}
            onChange={(event) => handleInput(event.target.value)}
          />
        </section>

        <div>
          <button type="submit" className="todo-button">
            Add task
          </button>
        </div>
      </form>
      <section className="myUnOrdList">
        <ul>
          {task.map((tasks, index) => {
            return (
              <li key={index} className="todo-item">
                {tasks}
                <button className="check-btn">
                  <IoMdCheckbox />
                </button>
                <button className="delete-btn" onClick={()=>handleDelete(tasks)}>
                  <MdDeleteForever />
                </button>
              </li>

            );
          })}
          <li className="todo-item">
            <button className="clear-btn" onClick={handleClearBtn}>Clear All</button>
          </li>
        </ul>
      </section>
    </section>
  );
};
