import { NEW_GAME } from '../actions'

const initialState = {
  guesses: [],
  win: false,
  modal: false
}

export const hotColdReducer = (state=initialState, action) => {
  switch(action.type) {
    case: NEW_GAME
    return Object.assign({}, state),

    default:
  return: state;
  }
};




