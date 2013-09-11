var express = require("express")
  , WebSocketServer = require("ws").Server

var app = express()
  , server = require("http").createServer(app)
  , wss = new WebSocketServer({port: 8888})

server.listen(8880)


wss.broadcast = function(data) {
    for(var i in this.clients) {
        this.clients[i].send(data)
    }
}

wss.on("connection", function(ws) {
    ws.on("message", function(msg) {
        wss.broadcast(msg)
    })
})

app.use(express.static(__dirname + "/static"))


