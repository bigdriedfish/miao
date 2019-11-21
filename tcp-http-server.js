var net = require('net')
var server = net.createServer()
const port = 80
server.on('connection', conn => {
	conn.on('data', d => {
		console.log(d.toString())
		conn.write(`HTTP/1.1 200 OK\r\n`)
		conn.write(`Content-Type:text/html\r\n`)
		conn.write(`\r\n`)
		conn.write(`<h1>Hello World!</h1>`)
		conn.end()
	})

})
server.listen(port, () => {
	console.log('server listening on port', port)
})