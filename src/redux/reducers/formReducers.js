import { UPDATE_TITLE, UPDATE_DESCRIPTION, UPDATE_DATE, INCREMENT_ID } from '../actionTypes';

export const updateTitle = (state = '', action) => {
  if (action.type === UPDATE_TITLE) {
    return action.payload;
  } else {
    return state;
  }
}
export const updateDescription = (state = '', action) => {
  if (action.type === UPDATE_DESCRIPTION) {
    return action.payload;
  } else {
    return state;
  }
}
export const updateDate = (state = new Date(), action) => {
  if (action.type === UPDATE_DATE) {
    return action.payload;
  } else {
    return state;
  }
}
export const incrementId = (state = 3, action) => {
  if (action.type === INCREMENT_ID) {
    return state + 1;
  } else {
    return state;
  }
}