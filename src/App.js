import { useRef, useState } from "react";
import "./App.css";
import Input from "./components/input";
import ToDoList from "./components/toDoList";

function App() {
  const [inputField, setInputField] = useState("");
  const [toDos, setToDos] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [doneList, setDoneList] = useState([]);

  const textInput = useRef();

  const handleChange = (e) => {
    let value = e.target.value;
    setInputField(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLastId((id) => id + 1);
    setToDos([
      ...toDos,
      {
        value: inputField,
        id: lastId + 1,
        checked: false,
      },
    ]);
    setInputField("");
    textInput.current.value = "";
  };

  const handleDelete = (id) => {
    const toDo = toDos.filter((i) => i.id !== id);
    setToDos(toDo);
  };

  const handleDone = (id) => {
    const toDoDone = toDos.filter((i) => i.id === id);
    toDoDone[0].checked = true;
    console.log(toDoDone);
    setDoneList([...doneList, toDoDone[0]]);
    const toDo = toDos.filter((i) => i.id !== id);
    setToDos(toDo);
  };

  const handleToDo = (id) => {
    const newDoneList = doneList.filter((i) => i.id !== id);
    setDoneList(newDoneList);

    const toDoDone = doneList.filter((i) => i.id === id);
    toDoDone[0].checked = false;
    setToDos([...toDos, toDoDone[0]]);
  };

  const handleClearToDos = () => {
    setToDos([]);
  };

  const handleClearDone = () => {
    setDoneList([]);
  };

  return (
    <div className="App">
      <h2 className="title">ToDo List</h2>
      <Input
        doChange={handleChange}
        doSubmit={handleSubmit}
        inputRef={textInput}
      />
      <ToDoList
        title="To Do"
        doClear={handleClearToDos}
        list={toDos}
        doDelete={handleDelete}
        doChange={handleDone}
      />
      <ToDoList
        title="Done"
        doClear={handleClearDone}
        list={doneList}
        doDelete={handleDelete}
        doChange={handleToDo}
        className="task-done"
      />
      <footer>
        <a href="https://github.com/d15hw45h3r/todo-list">Github Url</a>
      </footer>
    </div>
  );
}

export default App;
