var http = require('http');

function renderNewPostForm(req, res){
	res.writeHead(200, {
		'Content-type': 'text/plain'
	});
	res.end('hw');
}

var server = http.createServer(function(req, res){
	renderNewPostForm(req, res);
});

server.listen(8000);

console.log('listening on httpl://127.0.0.1:8000');
