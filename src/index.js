import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Game from './components/game';
import {newGame, addGuess, popModal} from './actions'
import {initialState} from './reducers'

import store from './store';


console.log(store.getState());
store.dispatch(addGuess(5));
console.log(store.getState());
store.dispatch(addGuess(initialState.rightNumber));
console.log(store.getState());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
