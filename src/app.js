const bodyParser = require('body-parser') 
const express = require('express') 
const path = require('path') 
const main_router = require('./routers/main')
const cookieParser = require('cookie-parser') 
const jwt = require('express-jwt')

const socketio = require('socket.io')
const http = require('http')

const app = express() 
const server = http.createServer(app)
const io = socketio(server)


const publicDirectoryPath = path.join(__dirname, '../public') 

app.set('view engine', 'ejs')
app.set('views', publicDirectoryPath) 


// Setup static directory to serve
app.use(express.static(publicDirectoryPath, { index: '_' })) 


// Next 5 lines help in parsing input and getting req.body
app.use(bodyParser.urlencoded({ extended: false })) ;
// parse application/json
app.use(bodyParser.json()) ;
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })) 

// parses cookies and gives an object req.cookies
app.use(cookieParser()) 

app.use(main_router)

module.exports = { server, io }
