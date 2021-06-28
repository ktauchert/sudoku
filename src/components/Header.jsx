import React, { Component } from "react";
import "../styles/header.css";

export default class Header extends Component {
  render() {
    return (
      <div className='navbar'>
        <span className='nav-item navbar__title'>Sudoku</span>
        <span className='nav-item navbar__points'>
          Punkte: <span id='points-value'></span>
        </span>
        <div className='nav-item'>
          <button className='navbar__new-game-btn'>Neues Spiel</button>
          <button className='navbar__solution-btn'>Lösung</button>
        </div>
      </div>
    );
  }
}
