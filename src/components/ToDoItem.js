import React, { Component } from "react";

export default class ToDoItem extends Component {
  render() {
    // console.log(this.props.title);

    return (
      <li className="list-grpu-item text-capitalize d-flex justify-content-between my-2">
        <h6>{this.props.title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={this.props.handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={this.props.hendleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
