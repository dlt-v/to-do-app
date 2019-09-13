import {
  ADD_TASK,
  TOGGLE_TASK,
  DELETE_TASK,
  UPDATE_TITLE,
  UPDATE_DESCRIPTION,
  UPDATE_DATE,
  INCREMENT_ID
} from "../actionTypes";

export const createTask = task => {
  return {
    type: ADD_TASK,
    payload: task
  };
};
export const toggleTodo = id => {
  return {
    type: TOGGLE_TASK,
    payload: id
  };
};
export const deleteTodo = id => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};
export const updateTitle = title => {
  return {
    type: UPDATE_TITLE,
    payload: title
  };
};
export const updateDescription = description => {
  return {
    type: UPDATE_DESCRIPTION,
    payload: description
  };
};
export const updateDate = date => {
  return {
    type: UPDATE_DATE,
    payload: date
  };
};
export const incrementId = () => {
  return {
    type: INCREMENT_ID
  };
};
