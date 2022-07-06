import { useState } from "react"

export function Square({value, onClick}) {

    function handleClick() {
        onClick()
        // setCurrentState({valueState : "X"})
        // handleAlterPlayer()
    }

    return (
        <button 
            className="square" 
            onClick={handleClick}
        >
            {value}
        </button>
    )
}