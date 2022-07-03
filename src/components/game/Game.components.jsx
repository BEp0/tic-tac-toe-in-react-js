import { Board } from "../index.js"

export function Game(){
    return(
        <div className="game">
            <div className="game-board">
                <Board valuesList={[ [0, 1, 2], [3, 4, 5], [6, 7, 8] ]}/>
            </div>
            <div className="came-info">
                <div>{}</div>
                <ol>{}</ol>
            </div>
        </div>
    )
}