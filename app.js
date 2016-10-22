// in class assigment 

var express = require('express');
var app     = express();
var serv    = require('http').Server(app);
var io      = require('socket.io')(serv,{});

app.get('/', function(req, res)
{
   res.sendFile(__dirname + '/client/hot.html');
});

app.use('/client',express.static(__dirname + '/client'));
serv.listen(2000, function(err){
	if(err)console.log(err);
}); // listing of port 2000 localhost

 io.sockets.on('connection', function(socket)
 {
      console.log("on");

   socket.on('buttonListner', function(data)
   {
      console.log("from html " + data.name);

   });
   socket.emit('test',{mess:'hello from server'});
});
// app.use(express.static(path.join(__dirname, 'assets')));
// app.get('/', function(req, res)
// {
//    res.sendFile(__dirname + '/client/index.html'),(__dirname + '/client/assets/css/game.css');
// });
// app.use('/client',express.static(__dirname + '/client'));
// serv.listen(2000); // listing of port 2000 localhost