function socketMessage(options = {}) {
  let { socket, request, message } = options
  let messageObj = {}
  try {
    console.log('received: %s', message)
    messageObj = JSON.parse(message)
  } catch (e) { console.error(e) }

  switch (messageObj.event) {
    case 'init': {
      socket.send(JSON.stringify({
        event: 'init_complete'
      }))
      break
    }

    default: {
      break
    }
  }
}

module.exports = {
  socketMessage
}
