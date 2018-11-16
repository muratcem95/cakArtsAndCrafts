//CONNECTIVITY SETUP
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const moment = require('moment');
const hbs = require('hbs');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

const {mongoose} = require('./db/mongoose');
const {Product} = require('./models/product');

const viewsPath = path.join(__dirname, '../views');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('views', viewsPath);  
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.static(viewsPath));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//app.get('/', (req, res) => {   
//    
//});

//IO CONNECTIONS
io.on('connection', (socket) => {
    console.log('New user connected.');
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});
    
server.listen(port, () => console.log(`Server is up on port ${port}`));

