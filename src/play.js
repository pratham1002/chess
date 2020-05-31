const { io } = require('./app')

const {
    addUser,
    removeUser,
    getUser,
    isPaired,
    getOpponent,
    getUsersInRoom,
    getPairedUsers,
    getUnpairedUsers
} = require('./utils/users')

io.on('connection', (socket) => { 
    console.log('Connection established!')

    socket.on('join', (username, room, callback) => {
        try {
            const { error, user } = addUser({ id: socket.id, username: username, room: room })

            if (error) {
                return callback(error)
            }

            if (getUsersInRoom(user.room).length > 2) {
                return callback('room full')
            }
            console.log('users in the room :' + getUsersInRoom(user.room).length)

            socket.join(user.room)

            console.log('Paired on join', getPairedUsers())
            console.log('Unpaired', getUnpairedUsers())

            console.log('joined')
        }
        catch (e) {
            console.log(e)
        }
    })

    socket.on('pair', (username, callback) => {
        console.log(username + 'pairing')
        try {
            if (isPaired(socket.id)) {
                const user = getUser(username)
                const opponent = getOpponent(socket.id)
                callback(true)
                socket.emit('start', 'black')
                // socket.join(user.room)
                // io.sockets.in(user.room).emit('start', 'white')
                socket.to(user.room).emit('start', "white")               
            }
            else {
                console.log('unpaired')
                callback(false)
            }
        }
        catch (e) {
            console.log(e)
        }
    })

    socket.on('play', (username, id) => {
        const user = getUser(username)
        // console.log(user.room)
        socket.to(user.room).emit('opponentPlayed', id);
        // callback();
    })

    socket.on('move', (username, initial, final) => {
        const user = getUser(username)
        // console.log(user.room)
        socket.to(user.room).emit('opponentMoved', initial, final);
        // callback();
    })

    socket.on('convert', (username, piece, choices, final, finalRow, finalCol) => {
        const user = getUser(username)
        // console.log(user.room)
        socket.to(user.room).emit('opponentConverted', piece, choices, final, finalRow, finalCol)
        // callback();
    })

    socket.on('end', (player) => {
        // winner recieved from client side, run database changes here
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        console.log('Paired', getPairedUsers())
        console.log('Unpaired', getUnpairedUsers())
    })
})