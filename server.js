const express = require('express');
const app = express();


const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

const path = require('path');

const port = 3000;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angualr8-sept-2019'));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/angualr8-sept-2019/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
