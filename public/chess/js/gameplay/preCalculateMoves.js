function preCalculateMoves() {
    board.forEach((row) => {
        row.forEach((cell) => {
            if (cell.occupiedBy != null && cell.occupiedBy.color === turn) {
                console.log('moves at cell', cell, 'are', cell.occupiedBy.legalMoves())
                cell.occupiedBy.available_moves = cell.occupiedBy.legalMoves()
                console.log('main board after calcualtion for cell', cell, board)
            }
        })
    })
    console.log(board)
}