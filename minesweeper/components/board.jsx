import React from "react";
import Tile from "./tile";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.renderRows = this.renderRows.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
    }

    render() {
        const board = this.props.board;
        const that = this;
        return (
            <div id="board">
                {this.renderRows()}
            </div>
        );
    }

    renderRows() {
        const board = this.props.board;
        return board.grid.map((row, idx) => {
            return (
                <div className="row" key={`row-${idx}`}>
                    {this.renderTiles(row, idx)}
                </div>
            )
        })
    }

    renderTiles(row, idx) {
        const board = this.props.board;
        return row.map((tile, j) => {
            return (
                <Tile 
                    tile={tile}
                    updateGame={this.props.updateGame}
                    key={idx * board.gridSize + j} />
            )
        })
    }

}

export default Board;