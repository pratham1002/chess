function castle(initialCol, finalCol, row) {
    const initial = row.toString() + initialCol.toString()
    const final = row.toString() + finalCol.toString()

    // initial position is of king, final position is rook
    if (initialCol == 4) {
        // queen side castling
        if (finalCol == 0) {
            board[row][initialCol].occupiedBy.moved = true
            board[row][finalCol].occupiedBy.moved = true

            board[row][1].occupancy = board[row][initialCol].occupiedBy
            board[row][2].occupancy = board[row][finalCol].occupiedBy

            board[row][initialCol].occupiedBy.moveLocation = board[row][1]
            board[row][finalCol].occupiedBy.moveLocation = board[row][2]

            board[row][finalCol].occupancy = null
            board[row][initialCol].occupancy = null

            const bishopPlace = row.toString() + '2'
            const knightPlace = row.toString() + '1'

            document.getElementById(bishopPlace).innerHTML = document.getElementById(final).innerHTML
            document.getElementById(knightPlace).innerHTML = document.getElementById(initial).innerHTML
            document.getElementById(initial).innerHTML = ""
            document.getElementById(final).innerHTML = ""
        }

        // king side castling 
        if (finalCol == 7) {
            board[row][initialCol].occupiedBy.moved = true
            board[row][finalCol].occupiedBy.moved = true

            board[row][6].occupancy = board[row][initialCol].occupiedBy
            board[row][5].occupancy = board[row][finalCol].occupiedBy

            board[row][initialCol].occupiedBy.moveLocation = board[row][6]
            board[row][finalCol].occupiedBy.moveLocation = board[row][5]

            board[row][finalCol].occupancy = null
            board[row][initialCol].occupancy = null

            const bishopPlace = row.toString() + '5'
            const knightPlace = row.toString() + '6'

            document.getElementById(bishopPlace).innerHTML = document.getElementById(final).innerHTML
            document.getElementById(knightPlace).innerHTML = document.getElementById(initial).innerHTML
            document.getElementById(initial).innerHTML = ""
            document.getElementById(final).innerHTML = ""
        }
    }
    // initial postion is of rook, final postion is of king
    else {
        // queen side castling
        if (initialCol == 0) {
            board[row][initialCol].occupiedBy.moved = true
            board[row][finalCol].occupiedBy.moved = true

            board[row][1].occupancy = board[row][finalCol].occupiedBy
            board[row][2].occupancy = board[row][initialCol].occupiedBy

            board[row][finalCol].occupiedBy.moveLocation = board[row][1]
            board[row][initialCol].occupiedBy.moveLocation = board[row][2]

            board[row][initialCol].occupancy = null
            board[row][finalCol].occupancy = null

            const bishopPlace = row.toString() + '2'
            const knightPlace = row.toString() + '1'

            document.getElementById(bishopPlace).innerHTML = document.getElementById(initial).innerHTML
            document.getElementById(knightPlace).innerHTML = document.getElementById(final).innerHTML
            document.getElementById(initial).innerHTML = ""
            document.getElementById(final).innerHTML = ""
        }

        // king side castling
        if (initialCol == 7) {
            board[row][initialCol].occupiedBy.moved = true
            board[row][finalCol].occupiedBy.moved = true

            board[row][6].occupancy = board[row][finalCol].occupiedBy
            board[row][5].occupancy = board[row][initialCol].occupiedBy

            board[row][finalCol].occupiedBy.moveLocation = board[row][6]
            board[row][initialCol].occupiedBy.moveLocation = board[row][5]

            board[row][initialCol].occupancy = null
            board[row][finalCol].occupancy = null

            const bishopPlace = row.toString() + '5'
            const knightPlace = row.toString() + '6'

            document.getElementById(bishopPlace).innerHTML = document.getElementById(initial).innerHTML
            document.getElementById(knightPlace).innerHTML = document.getElementById(final).innerHTML
            document.getElementById(initial).innerHTML = ""
            document.getElementById(final).innerHTML = ""
        }
    }
    changeTurn()
    preCalculateMoves()
}