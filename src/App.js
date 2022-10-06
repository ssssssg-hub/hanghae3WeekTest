import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Form />
      <Title />
      <Box />
    </>
  );
}
function Form() {
  let [todoList, setTodoList] = useState([{ title: "리액트를 배워봅시다!!!" }]);
  const todoAdd = (event) => {
    event.preventDefault();
    setTodoList([...todoList, { title: event.target.title.value }]);
  };
  return (
    <form className="inputForm" onSubmit={todoAdd}>
      <input type="text" name="title"></input>
      <input type="submit" value="추가하기"></input>
    </form>
  );
}
function Title() {
  return (
    <div className="mainTitle">
      <h1>Todo List</h1>
    </div>
  );
}

function Box({ todoList }) {
  return (
    <div className="box">
      <p>{todoList}</p>
    </div>
  );
}
export default App;
