function renderBoard() {
    const $board = document.createElement("div")
    $board.setAttribute('id', 'board')
    document.getElementById("root").appendChild($board)
    
    // document.getElementById("board");

    board.forEach((row) => {
        row.forEach((box) => {
            let div = document.createElement("div")
            div.classList.add("box")
            if (box.color === true) {
                div.classList.add("green")
            }
            else {
                div.classList.add("white")
            }
            div.setAttribute("id", box.row.toString() + box.col.toString())
            div.setAttribute("onclick", "findMoves(this.id)")
            $board.appendChild(div)
        })
    })
}