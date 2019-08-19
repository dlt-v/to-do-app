import React, { Component } from 'react'

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;

class AppProvider extends Component {
  state = {
    test: 'I am provided from context'
  }


  render() {
    return (
      <AppContext>
      
      </AppContext>
    )
  }
}
