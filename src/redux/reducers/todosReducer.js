// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
//       )
//     default:
//       return state
//   }
// }

// export default todos
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../actionTypes';

const initialState = [
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
];

const operateTodos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('New ADD_TODO');
      return state;
    case TOGGLE_TODO:
      console.log('New TOGGLE_TODO');
      return state;
    case DELETE_TODO:
      console.log('New DELETE_TODO');
      return state;
    default:
      return state;
  }
}

export default operateTodos;