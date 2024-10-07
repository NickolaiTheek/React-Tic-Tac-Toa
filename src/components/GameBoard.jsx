

 
export default function GameBoard({onSelectSqaure, board}){
   
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowindex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updateBoard[rowindex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     });

    //     onSelectSqaure();
    // }
    return (
        <ol id= "game-board">
            {board.map((row, rowIndex) => (
                <li key = {rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                        <li key = {colIndex}>
                            <button onClick={()=> onSelectSqaure(rowIndex, colIndex)}
                                disabled ={playerSymbol !== null}
                            >{playerSymbol}
                                </button>
                        </li>
                    ))}
                    </ol>
                    
                </li>
                ))}
        </ol>
    );
}
