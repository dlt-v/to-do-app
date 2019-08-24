import React, { Component } from "react";
import Home from "./pages/Home";
import Finished from "./pages/Finished";
import Error from "./pages/Error";
import AddTask from "./pages/AddTask";

import "./App.css";
import "react-datepicker/dist/react-datepicker.css";

import { Route, Switch, withRouter } from "react-router-dom";
class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        title: "I am an example task",
        description: "Ea culpa non magna quis.",
        date: new Date('July 12, 2019 17:23:00'),
        isFinished: false
      },
      {
        id: 1,
        title: "I am a second example task",
        description: "Ea culpa non magna quis.",
        date: new Date('July 12, 2019 17:23:00'),
        isFinished: false
      },
      {
        id: 2,
        title: "I am a third, finished example task",
        description: "Ea culpa non magna quis.",
        date: new Date('July 12, 2019 17:23:00'),
        isFinished: true
      },
    ],
    new_id: 3,
    new_title: '',
    new_description: '',
    new_date: new Date()
  };

  handleChange = event => {
    
    const target = event.currentTarget;
    
    const value = target.value;
    const name = event.target.name;
    
    this.setState(
      {
        [name]: value
      }
    )
    
  }
  handleDateChange = event => {
    this.setState(
      {
        new_date: event
      }
    )
  }
  //Reset new values after closing AddTask form
  resetNewValues = () => {
    this.setState(
      {
        new_title: '',
        new_description: '',
        new_date: new Date()
      }
    )
  }
  addNewTask = () => {
    let errors = [];
    const tasks = [...this.state.tasks];
    const newTitle = this.state.new_title;
    if (newTitle.length === 0) errors.push('Please enter a valid title');
    const newDescription = this.state.new_description;
    if (newDescription.length === 0) errors.push('Please enter a valid description');
    
    const newDate = this.state.new_date;
    const newId = (this.state.new_id);
    
    if(errors.length > 0) {
      alert(errors[0], errors[1]);
    } else {
      this.setState({
        tasks: [...tasks, {
          id: newId,
          title: newTitle,
          description: newDescription,
          date: newDate,
          isFinished: false
        }],
        new_id: newId + 1
      })
      this.resetNewValues();
      this.props.history.push('/');
    }
  }
  deleteTask = (event) => {
    const id = parseInt(event.currentTarget.id);
    const tasks = [...this.state.tasks];
    const arrayId = tasks.findIndex(task => task.id === id);
    tasks.splice(arrayId, 1);
    
    this.setState({
      tasks
    })
    console.log(`Deleted an item with ID of ${id}`);
  }
  finishTask = (event) => {
    const id = parseInt(event.currentTarget.id);
    const tasks = [...this.state.tasks];
    const arrayId = tasks.findIndex(task => task.id === id);
    console.log(id);
    tasks[arrayId].isFinished = true;
    this.setState({
      tasks
    })
  }
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home tasks={this.state.tasks} deleteTask={this.deleteTask} finishTask={this.finishTask}/>
            )}
          />
          <Route
            exact
            path="/finished"
            render={() => (
              <Finished tasks={this.state.tasks} deleteTask={this.deleteTask} finishTask={this.finishTask}/>
            )}
          />
          <Route
            exact
            path="/add_task"
            render={() => (
              <AddTask handleChange={this.handleChange} handleDateChange={this.handleDateChange} resetNewValues={this.resetNewValues} addNewTask={this.addNewTask} new_title={this.state.new_title} new_description={this.state.new_description} new_date={this.state.new_date}/>
            )}
          />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}
export default withRouter(App);