import React, { Component } from "react";
import Home from "./pages/Home";
import Finished from "./pages/Finished";
import Error from "./pages/Error";
import AddTask from "./pages/AddTask";

import "./App.css";

import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        title: "I am an example task",
        description: "Ea culpa non magna quis.",
        date: new Date('December 17, 1995 03:24:00'),
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
    new_title: '',
    new_description: ''
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
  //Resent new values after closing AddTask form
  resetNewValues = () => {
    this.setState(
      {
        new_title: '',
        new_description: ''
      }
    )
  }
  addNewTask = () => {
    let newId = this.state.tasks.length;
    let tasks = [...this.state.tasks];
    let newTitle = this.state.new_title;
    let newDescription = this.state.new_description;
    this.setState({
      tasks: [...tasks, {
        id: newId,
        title: newTitle,
        description: newDescription,
        date: new Date()
      }]
    })
  }
  deleteTask = (event) => {
    let id = event.currentTarget.id;
    let tasks = [...this.state.tasks];

    tasks.splice(id, 1);
    this.setState({
      tasks
    })
    
  }
  //TO DO
  finishTask = (event) => {
    const target = event.currentTarget;
    console.log(target);
    
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
              <AddTask handleChange={this.handleChange} resetNewValues={this.resetNewValues} addNewTask={this.addNewTask} new_title={this.state.new_title} new_description={this.state.new_description}/>
            )}
          />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}
