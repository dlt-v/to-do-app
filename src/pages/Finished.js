import React from "react";
import SwitchButton from "../components/SwitchButton";
import Task from "../components/Task";

import { connect } from "react-redux";

const renderSwitchButton = tasks => {
  const finishedTasks = tasks.filter(task => task.isFinished === true);

  if (finishedTasks.length > 0)
    return <SwitchButton onMain={false} text="current tasks" />;
};
const renderTasks = tasks => {
  const tasksToRender = tasks.filter(task => task.finished === true);
  return tasksToRender;
};

const Finished = ({ tasks }) => {
  return (
    <div className="main">
      {renderSwitchButton(tasks)}
      {renderTasks(tasks).map(task => (
        <Task
          id={task.id}
          key={task.id}
          title={task.title}
          description={task.description}
          date={task.date}
        />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};
export default connect(mapStateToProps)(Finished);
