function pawnToQueen(choices, final, finalRow, finalCol) {
    removeChoices(choices)
    
    console.log('creating the new piece')
    new_queen = new Queen(board[finalRow][finalCol], board[finalRow][finalCol].occupiedBy.color)
    board[finalRow][finalCol].occupancy = new_queen

    completeConversion(finalRow, finalCol, final)
}