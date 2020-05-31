function calculateMoves(cur_board) {
    console.log('calculating moves for oppoosite of ', turn)
    cur_board.forEach((row) => {
        row.forEach((cell) => {
            if (cell.occupiedBy != null && cell.occupiedBy.color != turn) {
                cell.occupiedBy.available_moves = cell.occupiedBy.legalMoves()
            }
        })
    })
}