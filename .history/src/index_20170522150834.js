import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Game from './components/game';

console.log(createStore(hotColdReducer));
createStore(hotColdReducer).dispatch(newGame());

console.log(createStore(hotColdReducer).getState());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
