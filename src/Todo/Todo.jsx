import { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export const Todo = () => {
  const [task, setTask] = useState([]);
  const [dataTime, setDateTime] = useState("");
  const handleInput = (value) => {
    setInputValue(value);
  };
  const handleSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;

    setTask((prev) => [...prev, inputValue]);
  };
  const handleClearBtn = () => {
    setTask([]);
  };
  const handleDelete = (value) => {
    console.log(task);
    console.log(value);
    const updatedVal = task.filter((curVal) => {
      return curVal !== value;
    });
    setTask(updatedVal);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="todo-container">
      <header className="header">
        <h2>Todo List</h2>
      </header>
      <h2>{dataTime}</h2>
      <TodoForm addTodo={handleSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((tasks, index) => {
            return (
              <TodoList key={index} tasks={tasks} handleDelete={handleDelete} />
            );
          })}
          
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearBtn}>Clear All</button>
      </section>
    </section>
  );
};
