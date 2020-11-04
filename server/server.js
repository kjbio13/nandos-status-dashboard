const express = require('express')
var request = require('request')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var request = require('request');
function handler(req, res) {
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("URL is OK") // Print the google web page.
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('URL is OK');
    } else {
      res.writeHead(500, {'Content-Type': 'text/html'});
      res.end('URL broke:'+JSON.stringify(response, null, 2));
    }
  })
};

// require('http').createServer(handler).listen(4000);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 