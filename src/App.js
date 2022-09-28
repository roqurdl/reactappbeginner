import { useState } from "react";
function App() {
  const deletBtn = (index) => {
    setDoList(doList.filter((todo, listIndex) => index !== listIndex));
  };
  const [toDo, setToDo] = useState("");
  const [doList, setDoList] = useState([]);
  const onChange = (e) => {
    setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setDoList((curArray) => [...curArray, toDo]);
    setToDo("");
  };
  return (
    <div>
      <h1>To Do List ({doList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={toDo}
          placeholder="Write To Do."
          onChange={onChange}
        ></input>
        <button>Add List</button>
      </form>
      <hr />
      <ul>
        {doList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deletBtn(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
