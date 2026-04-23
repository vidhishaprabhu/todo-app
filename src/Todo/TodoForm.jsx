import { useState } from "react";
const TodoForm = ({addTodo}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (value) => {
    setInputValue(value);
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    addTodo(inputValue)
    setInputValue("");
  }
  
  return (
    <section className="todo-card">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            value={inputValue}
            placeholder="Enter the task"
            onChange={(event) => handleInput(event.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="todo-button">
            Add task
          </button>
        </div>
      </form>
    </section>
  );
};
export default TodoForm;
