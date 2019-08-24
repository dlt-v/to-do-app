import React from 'react';
import DatePicker from 'react-datepicker';

const AddTask = ({ handleChange, handleDateChange, resetNewValues, addNewTask, new_title, new_description, new_date }) => {
  return (
    <div className="modal-add">
      <div className="modal-add__container">
        <h1 className="modal-add__title">Add a new task!</h1>
        <input
          type="text"
          maxlength="20"
          name="new_title"
          id="new_title"
          className="modal-add__input--title modal-add__input"
          placeholder="title"
          onChange={handleChange}
          value={new_title}
        />
        <textarea
          maxlength="200"
          type="text"
          name="new_description"
          id="new_description"
          className="modal-add__input--description modal-add__input"
          placeholder="description"
          onChange={handleChange}
          value={new_description}
        />
        <div className="modal-add__date-container">
          <DatePicker className="modal-add__date-input"
            selected={new_date}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
          />
        </div>
        <div className="modal-add__button-container">
          <button
            className="button-add"
            onClick={() => {
              addNewTask();
            }}
          >
            Add
          </button>
          <button className="button-cancel" onClick={resetNewValues}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
