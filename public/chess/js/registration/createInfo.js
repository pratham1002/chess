function createInfo() {
    const $myDetails = document.createElement('div')
    $myDetails.innerHTML = "You are playing as " + me + " , when it is not your turn your screen will be frozen unless the opponent plays"
    document.getElementById("root").appendChild($myDetails)
    const $turn = document.createElement('div')
    $turn.innerHTML = "Currently " + turn + " to play"
    $turn.setAttribute('id', 'turn')
    document.getElementById("root").appendChild($turn)
}