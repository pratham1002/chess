function pawnToBishop(choices, final, finalRow, finalCol) {
    removeChoices(choices)
    
    console.log('creating the new piece')
    new_bishop = new Bishop(board[finalRow][finalCol], board[finalRow][finalCol].occupiedBy.color)
    board[finalRow][finalCol].occupancy = new_bishop

    completeConversion(finalRow, finalCol, final)
}