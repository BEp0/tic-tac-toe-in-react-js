import { Square } from "../index.js";

export function Board({valuesList /*array with arrays*/ }){
    const status = 'Next player: X'
    return(
        <div>
            <div className="status">{status}</div>
            {/*  [ [], [], [] ]. map() => []   */}
            {valuesList.map(values => createBoardRow(values))}
        </div>
    )
}

function createBoardRow(values /*array with values*/){
    return(
        <div className="board-row">
            {values.map(value => <Square value={value}></Square>)}
        </div>
    )
}