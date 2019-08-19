import React, { Component } from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AddTask from "./pages/AddTask";

import "./App.css";

import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = {
    tasks: [],
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
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home tasks={this.state.tasks} deleteTask={this.deleteTask}/>
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
