import React from 'react'
import { Link } from 'react-router-dom';
const AddTask = ({ handleChange, resetNewValues, addNewTask, new_title, new_description }) => {
  return (
    <div className="modal-add">
      <div className="modal-add__container">
        <h1 className="modal-add__title">Add a new task!</h1>
        <input
          type="text"
          name="new_title"
          id="new_title"
          className="modal-add__input--title modal-add__input"
          placeholder="title"
          onChange={handleChange}
          value={new_title}
        />
        <textarea
          type="text"
          name="new_description"
          id="new_description"
          className="modal-add__input--description modal-add__input"
          placeholder="description"
          onChange={handleChange}
          value={new_description}
        />
        <div className="modal-add__button-container">
          <Link to="/">
            <button
              className="button-add"
              onClick={() => {
                addNewTask();
                resetNewValues();
              }}
            >
              Add
            </button>
            <button className="button-cancel" onClick={resetNewValues}>
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
