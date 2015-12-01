var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3333);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

// Időbélyeg készítése.
function getTimeStamp() {
    var currentDate = new Date(),
        stamp = currentDate.getHours()+":"+currentDate.getMinutes()
                +":"+currentDate.getSeconds();
    return stamp;
}

io.on('connection', function (socket) {
  socket.on('send-message', function (data) {
      
      data = "<b>"+getTimeStamp()+":</b> "+data;
      
      socket.broadcast.emit( 'chat-message', data );
  });
});







