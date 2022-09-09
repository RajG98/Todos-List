import "./App.css";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Todos } from "./Components/Todos";
import { About } from "./Components/About";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./Components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let init;
  if (localStorage.getItem("todos") === null) {
    init = [];
  } else {
    init = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState(init);
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const addTodos = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, addTodos]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="Todos List" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
