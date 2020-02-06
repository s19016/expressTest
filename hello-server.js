const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/foo' && req.method === 'get'){
        res.writeHead(404, {'content-Type': 'text/html'})
        res.end('<p>404 page not found</p>')
    }
    res.writeHead(200, {'content-Type': 'text/html'})
    res.write('<h1>Hello</h1>')
    res.write('<p>this is paragraph</p>')
    res.end()
}).listen(8081)