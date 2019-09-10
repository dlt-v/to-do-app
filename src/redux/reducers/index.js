import { combineReducers } from 'redux';
import operateTodos from './todosReducer';
const doingStuff = () => {
  return [
    {
      title: 'Stuff title',
      description: 'Stuff description'
    },
    {
      title: 'Stuff t122itle',
      description: 'Stuff ddddescription'
    },
    {
      title: 'Stuff ti111tle',
      description: 'Stfsduff description'
    }
  ];
}

const actualStuffReducer = (actualStuff = null, action) => {
  if(action.type === 'DOING_STUFF') {
    return action.payload;
  } else {
    return actualStuff;
  }
}

export default combineReducers({
  todos: operateTodos,
  stuff: doingStuff,
  actualStuff: actualStuffReducer
})