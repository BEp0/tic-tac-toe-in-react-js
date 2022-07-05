import { Board } from "../index.js"

export function Game(){
    return(
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
            <div className="came-info">
                <div>{}</div>
                <ol>{}</ol>
            </div>
        </div>
    )
}