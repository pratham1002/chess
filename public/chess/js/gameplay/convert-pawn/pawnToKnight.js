function pawnToKnight(choices, final, finalRow, finalCol) {
    removeChoices(choices)
    
    console.log('creating the new piece')
    new_knight = new Knight(board[finalRow][finalCol], board[finalRow][finalCol].occupiedBy.color)
    board[finalRow][finalCol].occupancy = new_knight

    completeConversion(finalRow, finalCol, final)
}