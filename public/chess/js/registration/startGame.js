function startGame() {
    initialiseBoard()
    renderBoard()
    spawnPieces("black")
    spawnPieces("white")
    renderPieces()
    preCalculateMoves()
    console.log("Playing as " + me)

    if (me != turn) {
        freezeClic = true
        document.addEventListener("click", freezeClicFn, true);
    }
    else {
        freezeClic = false
    }

    function freezeClicFn(e) {
        if (freezeClic) {
            e.stopPropagation();
            e.preventDefault();
        }
    }
    
    const $myDetails = document.createElement('div')
    $myDetails.innerHTML = "You are playing as " + me + " , when it is not your turn your screen will be frozen unless the opponent plays"
    document.body.appendChild($myDetails)
    const $turn = document.createElement('div')
    $turn.innerHTML = "Currently " + turn + " to play"
    $turn.setAttribute('id', 'turn')
    document.body.appendChild($turn)
}