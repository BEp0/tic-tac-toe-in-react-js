
export function Square({value, player, handClick}) {

    function click(i){
        if(!value){
            handClick(i)
        }
    }

    return (
        <button className="square" onClick={() => click(value)}>
            {value}
        </button>
    )
}