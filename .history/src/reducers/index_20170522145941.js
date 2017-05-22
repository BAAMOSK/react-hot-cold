import { NEW_GAME } from '../actions'

const initialState = {
  guesses: [],
  win: false,
  modal: false
}

const hotColdReducer = (state=initialState, action) => {
  switch(action.type) {
    case: NEW_GAME
    return Object.assign({}, initialState)

    default:
    return state;
  }
};

export { hotColdReducer }


