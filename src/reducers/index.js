import { NEW_GAME, ADD_GUESS, POP_MODAL } from '../actions'

export const initialState = {
  guesses: [],
  win: false,
  modal: false,
  rightNumber: Math.floor(Math.random() * 100)
}

const hotColdReducer = (state=initialState, action) => {
  switch(action.type) {
    case NEW_GAME:
    return Object.assign({}, initialState)

    case ADD_GUESS:
    return Object.assign({}, state, {guesses: [...state.guesses, action.guess]})

    case POP_MODAL:
    return Object.assign({}, state, {modal: !state.modal})

    default:
    return state;
  }
};

export { hotColdReducer }
