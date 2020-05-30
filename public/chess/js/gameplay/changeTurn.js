function changeTurn() {
    if (turn === "white") {
        turn = "black"
    }
    else {
        turn = "white"
    }

    clickManager()

    document.getElementById('turn').innerHTML = "Currently " + turn + " to play"
}