// Szerver válaszok logolása.
function sendToLog( log ) {
    var timeStamp = new Date().getTime();
    document.querySelector( "#node-console" ).innerHTML +=
        "\n"+timeStamp+": "+log;
}

// Termékek megjelenítése.
var productsDiv = document.querySelector( ".products-div" );
function showProducts( products ) {
    var content = '<ul>';
    products = JSON.parse( products );
    for ( var k in products ) {
        content += '<li><b>'+products[k].name+'</b></li>';
    }
    content += '</ul>';    
    productsDiv.innerHTML = content;
}


// Ajax kérés indítása a Node szerver felé.
/* var xhr = new XMLHttpRequest();
xhr.open( "get", "http://localhost:3333" );
xhr.onload = function() {
    // sendToLog( this.response );
    showProducts( this.response );
};
xhr.send();
*/

// Üzenetek megjelenítése.
var area = document.querySelector( "#node-console" );
function showSocketMessage( message ) {
    area.innerHTML += message+"\n";
}

// Socket.io kliens oldali kommunikáció.
var socket = io('http://localhost:3333');

// Üzenetek küldése.
var messageInput = document.querySelector( "#my-message" );
messageInput.addEventListener( "keyup", function(e) {
   if ( e.keyCode === 13 ) {
        socket.emit('send-message', messageInput.value );
        messageInput.value = "";
   } 
});
document.querySelector( "#send-message" )
    .addEventListener( "click", function() {
        socket.emit('send-message', messageInput.value );
        messageInput.value = "";
    });

socket.on('chat-message', function (data) {
    showSocketMessage( data );
});






















