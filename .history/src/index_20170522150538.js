import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { hotColdReducer } from './reducers';
import {newGame} from './actions'
import './reset.css';
import './index.css';
import Game from './components/game';

console.log(createStore(hotColdReducer).dispatch());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
