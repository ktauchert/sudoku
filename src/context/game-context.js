import React, { Component, createContext } from 'react'

const GameContext = createContext();

export default class GameContextProvider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GameContext.Provider
                value={""}
            >
                {this.props.children}
            </GameContext.Provider>
        )
    }
}
