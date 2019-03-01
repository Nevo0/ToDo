import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    const { items, handleClear, hendleDelete, handleEdit } = this.props;
    console.log(items);

    const item = items.map(item => {
      return (
        <ToDoItem
          key={item.id}
          title={item.item}
          hendleDelete={() => hendleDelete(item.id)}
          handleEdit={() => handleEdit(item.id)}
        />
      );
    });

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>

        {item}
        <button
          className="btn btn-danger text-capitalize mt-5"
          onClick={handleClear}
        >
          clear list
        </button>
      </ul>
    );
  }
}
