import React from 'react';

import './guess-form.css';
import {connect} from 'react-redux';
import {addGuess} from '../actions';

export class GuessForm extends React.Component {
  onGuess(event) {
    event.preventDefault();
    const value = this.input.value;
    this.props.dispatch(addGuess(value));
    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={e => this.onGuess(e)}>
        <label htmlFor="userGuess">Enter your Guess</label>
        <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Guess" required ref={input => this.input = input}/>
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
      </form>
    );
  }
};


export default connect()(GuessForm);
