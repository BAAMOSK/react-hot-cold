import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { hotColdReducer } from './reducers';
import './reset.css';
import './index.css';

import Game from './components/game';

import { createStore } from 'redux';

console.log(createStore(hotColdReducer));

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
