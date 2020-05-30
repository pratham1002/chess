function preCalculateMoves() {
    board.forEach((row) => {
        row.forEach((cell) => {
            if (cell.occupiedBy != null && cell.occupiedBy.color === turn) {
                cell.occupiedBy.available_moves = cell.occupiedBy.legalMoves()
            }
        })
    })
}