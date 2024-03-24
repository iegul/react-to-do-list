import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [todo, setToDo] = useState([]);
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const addToDo = () => {
    if (isEditing) {
      todo[editIndex].title = title;
      todo[editIndex].description = description;
    } else {
      var toDoListItem = {
        title: title,
        description: description,
      };
      setToDo([...todo, toDoListItem]);
    }
    setTitle("");
    setDescription("");
    setIsEditing(false);
  };
  const editToDo = (index) => {
    var toDoToEdit = todo[index];
    setTitle(toDoToEdit.title);
    setDescription(toDoToEdit.description);
    setIsEditing(true);
    setEditIndex(index);
  };

  const deleteToDo = (index) => {
    const tmpToDo = [...todo];
    tmpToDo.splice(index, 1);
    setToDo(tmpToDo);
  };

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <br></br>
      <label>Title:</label>
      <br></br>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br></br>
      <label>Description:</label>
      <br></br>
      <input
        type="text"
        id="description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button onClick={addToDo}>SAVE</button>

      <table>
        <thead>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </thead>
        <tbody>
          {todo.map((todo, index) => (
            <tr key={index}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <button onClick={() => editToDo(index)}>EDİT</button>
                <button onClick={() => deleteToDo(index)}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
