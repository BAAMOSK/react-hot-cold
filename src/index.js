/*eslint-disable*/
import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './reset.css';
import './index.css';
import Game from './components/game';
import {newGame, addGuess, popModal} from './actions'
import {initialState} from './reducers'

import store from './store';


console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
      <Game />
    </Provider>,
    document.getElementById('root')
);
