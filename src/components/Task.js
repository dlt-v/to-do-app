import React from "react";
import { MdCheck, MdClose } from "react-icons/md";

import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday"
];
const addZero = number => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <h2 className="task__title">{this.props.title}</h2>
        <p className="task__desc">{this.props.description}</p>
        <p className="task__date">
          {`On ${days[this.props.date.getDay()]}, ${addZero(
            this.props.date.getDate()
          )}.${addZero(
            this.props.date.getMonth() + 1
          )}.${this.props.date.getFullYear()} at ${this.props.date.getHours()}:${this.props.date.getMinutes()}`}
        </p>
        {this.props.isFinished ? null : (
          <div className="task__buttons">
            <div
              className="task__button task__button--done"
              id={this.props.id}
              title="I am finished!"
              onClick={() => this.props.toggleTodo(this.props.id)}
            >
              <MdCheck />
            </div>
            <div
              className="task__button task__button--delete"
              id={this.props.id}
              onClick={() => this.props.deleteTodo(this.props.id)}
              title="I give up!"
            >
              <MdClose />
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  {
    toggleTodo,
    deleteTodo
  }
)(Task);
