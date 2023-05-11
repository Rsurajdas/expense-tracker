import "./App.css";
import Input from "./Input";
import List from "./List";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const capture = (e) => {
    if (e.keyCode === 13) {
      setTask([
        ...task,
        {
          name: e.target.value,
          id: new Date().getTime(),
        },
      ]);
      e.target.value = "";
    }
  };
  return (
    <div className="App">
      <div className="container">
        <Input
          type="text"
          placeholder="Please enter your task here"
          handlerFn={capture}
        />
        <hr />
        <ul className="task-item">
          {task.map((i) => (
            <List task={i.name} key={i.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
