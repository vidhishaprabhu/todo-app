import { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

export const Todo = () => {
  const [task, setTask] = useState([]);
  const [dataTime, setDateTime] = useState("");
  // const handleInput = (value) => {
  //   setInputValue(value);
  // };
  const handleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    console.log(inputValue.content)
    if (!content) return;
    const isTodoContentMatched = task.find(
      (currEle) => currEle.content === content,
    );
    if (isTodoContentMatched) return;

    setTask((prev) => [...prev, {id,content,checked}]);
  };
  const handleClearBtn = () => {
    setTask([]);
  };
  const handleDelete = (id) => {
    const updatedVal = task.filter((curVal) => {
      return curVal.id!== id;
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
      <TodoDate dateTime={dataTime} />
      <TodoForm addTodo={handleSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((tasks) => {
            return (
              <TodoList key={tasks.id} tasks={tasks} handleDelete={handleDelete} />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearBtn}>
          Clear All
        </button>
      </section>
    </section>
  );
};
