import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { newGame } from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';

import { createStore } from 'redux';

console.log(createStore, newGame());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
