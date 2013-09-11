$(document).ready(function() {
    var HOST = window.document.location.host.replace(/:.*/, "")
    var WS = new WebSocket("ws://" + HOST + ":8888")
      , $cursor = $("#cursor")

    WS.onmessage = function(msg) {        
        console.log(msg.data)
        $cursor.show().animate({
             top: msg.data.split(",")[1] - 6
            ,left: msg.data.split(",")[0] - 13
        }, 100)
    }
})
