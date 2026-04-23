import { useEffect, useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getLocalStorageData,setLocalStorageData } from "./TodoLocalStorage";

export const Todo = () => {
  const localTodos="reactTodo"
  const [task, setTask] = useState(()=>getLocalStorageData());
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
  setLocalStorageData(task)
  const handleClearBtn = () => {
    setTask([]);
  };
  const handleChecked=(id)=>{

    const updatedTask=task.map((curTask)=>{
      if(curTask.id===id){
        return {
          ...curTask,checked:!curTask.checked
        }
      }
      else{
        return curTask
      }
    })
    setTask(updatedTask)

  }
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
              <TodoList key={tasks.id} tasks={tasks} handleDelete={handleDelete} checked={tasks.checked} onHandleChecked={handleChecked}/>
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
