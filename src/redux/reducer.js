import { ADD_TASK, REMOVE_TASK, SET_INPUT_TEXT } from "./actions";
import { initialState } from "./initialState";

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_TEXT: 
      return {
        ...state,
        task: { text: action.payload }
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }]
      } 
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    default:
      return state
  }
}
