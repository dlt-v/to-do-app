import React from 'react'
import Task from '../components/Task';
import AddNew from '../components/AddNew';
const Home = ({ tasks, deleteTask }) => {
  return (
    <div className="main">
      {tasks.map(task => 
        <Task id={task.id} key={task.id} title={task.title} description={task.description} date={task.date} deleteTask={deleteTask}/>
        )}
      <AddNew/>
    </div>
  )
}

export default Home;
