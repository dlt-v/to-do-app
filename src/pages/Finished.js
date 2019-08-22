import React from 'react'
import SwitchButton from '../components/SwitchButton';
import Task from '../components/Task';

const renderSwitchButton = tasks => {
  const finishedTasks = tasks.filter(task => task.isFinished === true);
  
  if (finishedTasks.length > 0) return (
    <SwitchButton onMain={false} text="current tasks" />
  )
};
const renderTasks = tasks => {
  const tasksToRender = tasks.filter(task => task.isFinished === true);
  return tasksToRender;
};

const Finished = ({ tasks, deleteTask, finishTask }) => {
  return (
    <div className="main">
      {renderSwitchButton(tasks)}
      {renderTasks(tasks).map(task => (
        <Task
          id={task.id}
          key={task.id}
          title={task.title}
          description={task.description}
          isFinished={task.isFinished}
          date={task.date}
          deleteTask={deleteTask}
          finishTask={finishTask}
        />
      ))}
    </div>
  )
}

export default Finished
