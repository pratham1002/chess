function pawnToRook(choices, final, finalRow, finalCol) {
    removeChoices(choices)
    
    console.log('creating the new piece')
    new_rook = new Rook(board[finalRow][finalCol], board[finalRow][finalCol].occupiedBy.color)
    board[finalRow][finalCol].occupancy = new_rook

    completeConversion(finalRow, finalCol, final)
}