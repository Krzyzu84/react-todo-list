import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up",
      },
      {
        id: 2,
        title: "make breakfast",
      },
      {
        id: 3,
        title: "sleep",
      },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("handle change");
  };
  handleSubmit = (e) => {
    console.log("handle Submit");
  };

  clearList = () => {
    console.log("clear list");
  };
  handleDelete = (id) => {
    console.log("handleDelete");
  };
  handleEdit = (id) => {
    console.log("handleEdit");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div class="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center"></h3>
              <TodoInput
                item={this.state.item}
                handleChange={this}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
