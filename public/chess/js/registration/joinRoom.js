function joinRoom() {
    const $registrationForm = document.getElementById('registrationForm')

    $registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault()

        const $username = document.getElementById('username')
        const $room = document.getElementById('room')
        console.log($username.value + ' ' + $room.value)
        username = $username.value
        await socket.emit('join', $username.value, $room.value, (error) => {
            if (error) {
				return console.log(error)
			}
            console.log("Room Joined")
        })

        socket.emit('pair', $username.value , (bool) => {
		    is_paired = bool
		    if (!is_paired) {
                console.log("Waiting to pair")
                const $waitForOpponent = document.createElement('div')
                $waitForOpponent.innerHTML = "Waiting for opponent to join, do not refresh page, game will start automatically when opponent joins"
                document.getElementById('registration').appendChild($waitForOpponent)
            }
	    })
    }) 

    socket.on('start', (color) => {
        console.log('socket start fn')
        me = color
        startGame()
    })

    socket.on('opponentPlayed', (id) => {
        console.log('recieved an id = ' + id)
        findMoves(id)
    })

    socket.on('opponentMoved', (initial, final) => {
        console.log('opponent moved = ' + initial + ' to ' + final)
        movePiece(initial, final)
    })
}
