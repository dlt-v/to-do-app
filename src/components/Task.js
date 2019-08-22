import React from 'react';
import { MdCheck, MdClose } from 'react-icons/md';

const days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'
]
const addZero = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

const Task = ({id, title, description, date, deleteTask}) => {
  return (
    <div className="task">
      <h2 className="task__title">
        {title}
      </h2>
      <p className="task__desc">
        {description}
      </p>
      <p className="task__date">
        {`On ${days[date.getDay()]}, ${addZero(date.getDate())}.${addZero(date.getMonth())}.${date.getFullYear()}`}
      </p>
      <div className="task__buttons">
        <div className="task__button task__button--done" title="I am finished!">
          <MdCheck />
        </div>
        <div className="task__button task__button--delete" id={id} onClick={deleteTask} title="I give up!">
          <MdClose />
        </div>
      </div>
    </div>
  )
}

export default Task;
