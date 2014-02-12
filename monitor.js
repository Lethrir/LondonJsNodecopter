var express = require('express');
var arDrone = require('ar-drone');
var WebSocket = require('ws').Server;
var http = require('http');

var server = http.createServer(app);
server.listen(8080);

var client = arDrone.createClient();
var data = [];

var app = express();

var wss = new WebSocket({server: server});
wss.on('error', function(e) {
	console.log(e);
});
wss.on('connection', function(ws) {
	console.log('connected');
	client.on('navdata', function(d){
		//console.log(d);
		if(d.demo !== undefined){
			var item = {
				x:d.demo.rotation.x,
				y:d.demo.rotation.y,
				z:d.demo.rotation.z
  				//x:d.demo.xVelocity,
  				//y:d.demo.yVelocity,
  				//z:d.demo.zVelocity
  			};
  			data.push();
  			ws.send(JSON.stringify(item));
		}
	});
	ws.on('error', function(e){
		console.log(e);
	});
});

app.get('/', function(req, res){
  res.status(200).sendfile(__dirname + '/public/index.html');
});

app.get('/launch', function(){
	client.takeoff();
});

app.get('/land', function(){
	client.stop();
	client.land();
});

var dc = 0;

app.get('/data', function(req, res){
	dc++;
	console.log('called data ' + dc + ' times');
	var series1 = [];
	var series2 = [];
	var series3 = [];
	var result = [series1, series2, series3];
	for(var i = 0; i < data.length; i++){
		series1.push([i, data[i].x]);
		series2.push([i, data[i].y]);
		series3.push([i, data[i].z]);
	}
	data = [];
	res.set({
		'Content-Type': 'text/json'
	});
	res.send(result);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);