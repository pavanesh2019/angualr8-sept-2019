//Install express server
/*const express = require('express');
const path = require('path');
const cors = require('cors');

var corsOptions = {
  origin: 'https://angular8-sept-2019.herokuapp.com/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(cors(corsOptions));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/public/angualr8-sept-2019'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/public/angualr8-sept-2019/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);*/
const express = require('express');  
const app = express();  
app.use(express.static(__dirname + '/dist'));  
app.all('*', (req, res) => {  
  res.status(200).sendFile(__dirname + '/dist/index.html');  
});  
app.listen(process.env.PORT || 8080);  
