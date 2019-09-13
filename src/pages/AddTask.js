import React from "react";
import DatePicker from "react-datepicker";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import {
  updateTitle,
  updateDescription,
  updateDate,
  createTask,
  incrementId
} from "../redux/actions";

const date = date => new Date(date);
class AddTask extends React.Component {
  render() {
    return (
      <div className="modal-add">
        <div className="modal-add__container">
          <h1 className="modal-add__title">Add a new task!</h1>
          <input
            type="text"
            maxLength="16"
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
              selected={date(this.props.date)}
              onChange={event => this.props.updateDate(event)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy H:mm"
              timeCaption="time"
              showPopperArrow={false}
              todayButton="Today"
            />
          </div>
          <div className="modal-add__button-container">
            <button
              className="button-add"
              onClick={() => {
                let errorArray = [];
                if (this.props.title.length === 0) {
                  errorArray.push("Incorrect title.");
                }
                if (this.props.description.length === 0) {
                  errorArray.push("Incorrect description.");
                }
                if (errorArray.length === 0) {
                  this.props.createTask({
                    id: this.props.newId,
                    title: this.props.title,
                    description: this.props.description,
                    date: date(this.props.date)
                  });
                  this.props.incrementId();
                  this.props.updateTitle("");
                  this.props.updateDescription("");
                  this.props.updateDate(new Date());
                  this.props.history.push("/");
                } else {
                  alert(errorArray[0]);
                }
              }}
            >
              Add
            </button>
            <Link to="/">
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
)(withRouter(AddTask));
