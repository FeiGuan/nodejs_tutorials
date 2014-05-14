var http = require('http');
var url = require('url');

function renderNewPostForm(req, res){
	res.writeHead(200, {
		'Content-type': 'text/plain'
	});
	res.end('hw');
}

function render404(req, res){
	res.writeHead(400);
	res.end("404 not found");
}

var server = http.createServer(function(req, res){
	var newPostFormRegex = new RegExp('^/posts/new/?$');
	var pathname = url.parse(req.url).pathname;
	if(newPostFormRegex.test(pathname)){
		renderNewPostForm(req, res);
	}else{
		render404(req, res);
	}
});

server.listen(8000);

console.log('listening on http://127.0.0.1:8000');
