import React, { Component } from "react";

import "../styles/main.css";
import BigGrid from "./BigGrid";
import SelectNumber from "./SelectNumber";

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <div className='container'>
          <div className='number-container'>
            <SelectNumber />
          </div>
          <div className='game-container'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((indexBig) => (
              <BigGrid indexBig={indexBig} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
