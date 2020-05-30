function spawnPieces(color) {
    // white is at top, black is at bottom
    let i, j, j1

    if (color == "black") {
        i = 0
        j = 7
        j1 = 6
    }
    if (color == "white") {
        i = 1
        j = 0
        j1 = 1
    }

    // spawn 2 rooks
    rook1 = new rook(board[j][0], color)
    rook2 = new rook(board[j][7], color)

    // spawn 2 knights
    knight1 = new knight(board[j][1], color)
    knight2 = new knight(board[j][6], color)

    // spawn 2 bishops
    bishop1 = new bishop(board[j][2], color)
    bishop2 = new bishop(board[j][5], color)

    // spawn a queen
    queen1 = new queen(board[j][3], color)

    // spawn a king
    king1 = new king(board[j][4], color)

    pieces[i] = [rook1, knight1, bishop1, queen1, king1, bishop2, knight2, rook2]

    for (var k = 0; k < 8; k++) {
        new_pawn = new pawn(board[j1][k], color)
        pieces[i].push(new_pawn)
    }
}