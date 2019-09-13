import React from "react";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { updateTitle, updateDescription, updateDate, createTask, incrementId } from "../redux/actions";

class AddTask extends React.Component {

  render() {
    return (
      <div className="modal-add">
        <div className="modal-add__container">
          <h1 className="modal-add__title">Add a new task!</h1>
          <input
            type="text"
            maxLength="35"
            name="new_title"
            id="new_title"
            className="modal-add__input--title modal-add__input"
            placeholder="title"
            onChange={event =>
              this.props.updateTitle(event.currentTarget.value)
            }
            value={this.props.title}
          />
          <textarea
            maxLength="200"
            type="text"
            name="new_description"
            id="new_description"
            className="modal-add__input--description modal-add__input"
            placeholder="description"
            onChange={event =>
              this.props.updateDescription(event.currentTarget.value)
            }
            value={this.props.description}
          />
          <div className="modal-add__date-container">
            <DatePicker
              className="modal-add__date-input"
              selected={this.props.date}
              onChange={event => this.props.updateDate(event)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </div>
          <div className="modal-add__button-container">
            <Link to="/">
              <button
                className="button-add"
                onClick={() => {
                  this.props.createTask({
                    id: this.props.newId,
                    title: this.props.title,
                    description: this.props.description,
                    date: this.props.date
                  });
                  this.props.incrementId();
                  this.props.updateTitle("");
                  this.props.updateDescription("");
                  this.props.updateDate(new Date());
                }}
              >
              Add
            </button>
              <button
                className="button-cancel"
                onClick={() => {
                  this.props.updateTitle("");
                  this.props.updateDescription("");
                  this.props.updateDate(new Date());
                }}
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    description: state.description,
    date: state.date,
    newId: state.newId
  };
};

export default connect(
  mapStateToProps,
  {
    updateTitle,
    updateDescription,
    updateDate,
    createTask,
    incrementId
  }
)(AddTask);
