import React from 'react'
import Task from '../components/Task';
import AddNew from '../components/AddNew';
import SwitchButton from '../components/SwitchButton';

//import ReduxTest from "../components/reduxTest";

const renderSwitchButton = tasks => {
  const finishedTasks = tasks.filter(task => task.isFinished === true);
  
  if (finishedTasks.length > 0) return (
    <SwitchButton onMain={true} text="finished tasks" />
  )
};
const renderTasks = tasks => {
  const tasksToRender = tasks.filter(task => task.isFinished === false);
  return tasksToRender;
};

const Home = ({ tasks, deleteTask, finishTask }) => {
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
          isFinished={task.isFinished}
          deleteTask={deleteTask}
          finishTask={finishTask}
        />
      ))}
      <AddNew />
    </div>
  );
};

export default Home;
