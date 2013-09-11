$(document).ready(function() {
    var HOST = window.document.location.host.replace(/:.*/, "")
    var WS = new WebSocket("ws://" + HOST + ":8888")

    $("html").mousemove(_.throttle(function(evt) {
        console.log(evt.pageX + "," + evt.pageY)
        WS.send(evt.pageX + "," + evt.pageY)
    }, 100))
})
