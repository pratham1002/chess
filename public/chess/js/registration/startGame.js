function startGame(info) {
    // delete the form
    document.getElementById('registration').parentElement.removeChild(document.getElementById('registration'))
    
    const $info = document.createElement('div')
    $info.innerHTML = info
    $info.setAttribute('id', 'info')
    document.getElementById('root').prepend($info)

    initialiseBoard()
    renderBoard()
    spawnPieces("black")
    spawnPieces("white")
    renderPieces()
    preCalculateMoves()
    console.log("Playing as " + me)

    clickManager()
    
    createInfo()
}