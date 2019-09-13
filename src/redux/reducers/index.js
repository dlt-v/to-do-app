import { combineReducers } from 'redux';
import operateTasks from './todosReducer';
import { updateTitle, updateDescription, updateDate, incrementId } from './formReducers';

export default combineReducers({
  title: updateTitle,
  description: updateDescription,
  date: updateDate,
  tasks: operateTasks,
  newId: incrementId
})