import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, SET_TASK } from './action'

const initialState = {
  tasks: []
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task)
      };

    case SET_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
}

export default taskReducer;