import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../redux/actions'

class ReduxTest extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div  onClick={() => this.props.selectSong(1)}>
        Hello there!
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    stuff: state.stuff,
    actualStuff: state.actualStuff
  };
  
}
export default connect(mapStateToProps, {
  selectSong
})(ReduxTest);