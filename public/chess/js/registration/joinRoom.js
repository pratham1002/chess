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

        socket.emit('pair', $username.value , (bool, color) => {
		    is_paired = bool
		    console.log("Paired ", is_paired)
		    if (!is_paired) {
			    console.log("Waiting to pair")
            }
            else {
                me = color
                startGame()
            }
	    })
    }) 

    socket.on('start', (color) => {
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
