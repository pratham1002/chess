function highlightLegalMoves(moves, initial) {

    moves.forEach((cell) => {
        const highlightedId = cell.row.toString() + cell.col.toString()
        const $cell = document.getElementById(highlightedId)
        const highlight = document.createElement("div")
        highlight.classList.add("dot")
        $cell.setAttribute("onclick", "movePiece(" + initial + ", " + highlightedId + ")")
        $cell.insertBefore(highlight, $cell.firstChild);
    })
}