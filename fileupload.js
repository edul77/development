var http = require('http');
var fs = require('fs')

fs.readFile('./employee.html', function(error,html) {
    if (error) throw error;
    http.createServer(function(req,res) {
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(html);
    return res.end();


    }).listen(8000);

});

