import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actionTypes';

const initialState = [
  {
    id: 0,
    title: "I am an example task",
    description: "Ea culpa non magna quis.",
    date: new Date('July 12, 2019 17:23:00'),
    finished: false
  },
  {
    id: 1,
    title: "I am a second example task",
    description: "Ea culpa non magna quis.",
    date: new Date('July 12, 2019 17:23:00'),
    finished: false
  },
  {
    id: 2,
    title: "I am a third, finished example task",
    description: "Ea culpa non magna quis.",
    date: new Date('July 12, 2019 17:23:00'),
    finished: true
  },
];
const addTask = (state, task) => {
  return [
    ...state,
    {
      id: task.id,
      title: task.title,
      description: task.description,
      date: task.date,
      finished: false
    }
  ];
};
const toggleTask = (state, id) => {
  const newState = [...state];
  const arrayId = newState.findIndex(task => task.id === id);
 newState[arrayId].finished = true;
  return newState;
};
const deleteTask = (state, id) => {
  const newState = [...state];
  const arrayId = newState.findIndex(task => task.id === id);
 newState.splice(arrayId, 1);
  return newState;
};
const operateTasks = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action.payload);
    case TOGGLE_TASK:
      return toggleTask(state, action.payload);
    case DELETE_TASK:
      return deleteTask(state, action.payload);
    default:
      return state;
  }
};

export default operateTasks;