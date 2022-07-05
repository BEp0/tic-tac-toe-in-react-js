import { useState } from "react";
import { Square } from "../index.js";

export function Board(){
    const [nextPlayer, setNextPlayer] = useState('X')
    const [squares, setSquares] = useState(Array(9).fill(null))        
    const status = 'Next player: X'

        
    function renderSquare(i){
        return <Square value={squares[i]} player={nextPlayer} handClick={handClick}/>
    }

    function handClick(i){
    }

    return(
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}