import React from "react";
import uuid from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//showing vs-code

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
