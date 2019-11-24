const handleSocket = require('./handle-socket.js')
const express = require('express')
const expressWs = require('express-ws')(express())
const app = expressWs.app
const path = require('path')

app.use(express.static(path.join(__dirname + '../../', 'public')))
app.ws('*', (ws, request) => { })
const clientWss = expressWs.getWss('*')

clientWss.on('connection', (socket, request) => {
  socket.on('message', message => handleSocket.socketMessage({
    socket,
    request,
    message
  }))
})

app.listen(4000, () => {
  console.log('Listening on http://localhost:4000/')
})
