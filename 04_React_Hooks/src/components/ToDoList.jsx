import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false, isDeleted: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="ToDoList">
      <div className="ListBox">
        <div className="input">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="输入代办事项"
          />
          <button onClick={handleAdd}>提交</button>
        </div>
      </div>
      <div className="List">
        {todos
          .filter((todo) => !todo.isDeleted)
          .map((item, index) => {
            return (
              <div key={index} className={item.completed ? "completed" : ""}>
                <span>{item.text}</span>
                <div>
                  <button onClick={() => toggleComplete(index)}>完成</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ToDoList;
