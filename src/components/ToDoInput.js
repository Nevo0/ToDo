import React, { Component } from "react";

export default class ToDoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control  text-capitalize"
              placeholder="Add a to do item"
              value={item}
              onChange={handleChange}
            />
          </div>
          {editItem ? (
            <button
              type="submit"
              className="btn btn-block btn btn-warning mt-3"
            >
              edit item
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-block btn-outline-success mt-3"
            >
              add item
            </button>
          )}
        </form>
      </div>
    );
  }
}
