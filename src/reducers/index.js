import { NEW_GAME, ADD_GUESS, POP_MODAL } from '../actions'
import {feedbackGenerator} from '../helpers.js'


export const initialState = {
  guesses: [],
  win: false,
  modal: false,
  rightNumber: Math.floor(Math.random() * 100),
  feedback: 'Take a guess'
}

const hotColdReducer = (state=initialState, action) => {
  switch(action.type) {
    case NEW_GAME:
    return Object.assign({}, initialState)

    case ADD_GUESS:
    console.log(action);
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback: feedbackGenerator(Math.abs(action.guess - state.rightNumber)),
      win: action.guess === state.rightNumber ? true : false
     })

    case POP_MODAL:
    return Object.assign({}, state, {modal: !state.modal})

    default:
    return state;
  }
};

export { hotColdReducer }
