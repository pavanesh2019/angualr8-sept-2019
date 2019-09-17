const express = require('express');
const app = express();


const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

const path = require('path');

const port = 3000;

app.get('*', (req, res) => {
 
    // angular routing
    console.log(`Angular serving ${req.url}`);
    res.sendFile(path.resolve('angualr8-sept-2019/index.html'));
  
});

// Start the app by listening on the default Heroku port
app.listen(port, () => console.log(`Listening on port ${port}!`));
 
