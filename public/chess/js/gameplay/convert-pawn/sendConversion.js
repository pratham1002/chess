function sendConversion(piece, choices, final, finalRow, finalCol) {
    socket.emit('convert', username, piece, choices, final, finalRow, finalCol)
}