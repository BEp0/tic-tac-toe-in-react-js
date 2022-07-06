import { useState } from "react";
import { Square } from "../index.js";

export function Board(){
    
    const [squares, setSquares] = useState({
        arraySquares: Array(9).fill(null),
        xIsNetxt: true
    })
    
    const status = `Next player: ${squares.xIsNetxt ? 'X' : 'O'}`

    function isWin(a, b, c){
        return squares.arraySquares[a] === squares.arraySquares[b] === squares.arraySquares[c]
    }


    function calculateWinner(){
        const linesWins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        console.log(squares.arraySquares)
        linesWins.forEach((line) => {
            const {arraySquares} = squares
            const [a, b, c] = line
            const win = arraySquares[a] === arraySquares[b] === arraySquares[c]
            // console.log(a, b, c, arraySquares[a], arraySquares[b], arraySquares[c], win )
        })
    }
    calculateWinner()

    function handleClick(index){
        const mySquares = squares.arraySquares.slice()
        if(!mySquares[index]){
            mySquares[index] = squares.xIsNetxt ? 'X' : 'O'
            setSquares({
                arraySquares: mySquares, xIsNetxt: !squares.xIsNetxt
            })
        }
    }

    function renderSquare(i){
        return <Square 
                value={squares.arraySquares[i]}
                onClick={() => handleClick(i)}
                />
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