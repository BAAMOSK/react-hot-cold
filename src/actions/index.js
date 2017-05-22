export const NEW_GAME = 'NEW_GAME';
export const ADD_GUESS = 'ADD_GUESS';
export const POP_MODAL = 'POP_MODAL';

//functions
export const newGame = () => ( { type: NEW_GAME } )
export const popModal = () => ( { type: POP_MODAL } )
export const addGuess = guess => ({
  type: ADD_GUESS,
  guess
})

// export {newGame, NEW_GAME};
