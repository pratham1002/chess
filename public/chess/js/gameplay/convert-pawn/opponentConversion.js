function opponentConversion(piece, choices, final, finalRow, finalCol) {
    if (piece === 'queen') {
        pawnToQueen(choices, final, finalRow, finalCol)
    }
    if (piece === 'rook') {
        pawnToRook(choices, final, finalRow, finalCol)
    }
    if (piece === 'knight') {
        pawnToKnight(choices, final, finalRow, finalCol)
    }
    if (piece === 'bishop') {
        pawnToBishop(choices, final, finalRow, finalCol)
    }
}