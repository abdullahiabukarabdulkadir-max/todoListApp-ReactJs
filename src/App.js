import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks((prev) => [...prev, { id: Date.now(), text: trimmed }]);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="input-row">
        <input
          type="text"
          placeholder="Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask} disabled={!text.trim()}>
          Add
        </button>
      </div>

      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <span className="task-text">{task.text}</span>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
