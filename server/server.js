//CONNECTIVITY SETUP
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const socketIO = require('socket.io');
const moment = require('moment');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
const nodemailer = require('nodemailer');

const {mongoose} = require('./db/mongoose');
const {Product} = require('./models/product');

const viewsPath = path.join(__dirname, '../views');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'muratcem95@gmail.com',
        pass: 'hqkjctddswrplwjm'
    }
});

app.set('views', viewsPath);  
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', (req, res) => {
    res.redirect('/allItems');
});

app.use(express.static(viewsPath));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/contactUs', (req, res) => {
    res.render('contactUs/contactUs.html');
});

app.get('/allItems', (req, res) => {  
    Product.find().sort({ firstName: 'asc' }).then((products) => {
        res.render("index.html", {products});
    }).catch((e) => res.send("Can not find the products, please try again later."));
});

app.get('/bags', (req, res) => {   
    Product.find({style: "bag"}).sort({ firstName: 'asc' }).then((products) => {
        res.render("bags/bags.html", {products});
    }).catch((e) => res.send("Can not find the products, please try again later."));
});

app.get('/beanies', (req, res) => {   
    Product.find({style: "beanie"}).sort({ firstName: 'asc' }).then((products) => {
        res.render("beanies/beanies.html", {products});
    }).catch((e) => res.send("Can not find the products, please try again later."));
});

app.get('/scarfs', (req, res) => {   
    Product.find({style: "scarf"}).sort({ firstName: 'asc' }).then((products) => {
        res.render("scarfs/scarfs.html", {products});
    }).catch((e) => res.send("Can not find the products, please try again later."));
});

app.get('/gloves', (req, res) => {   
    Product.find({style: "glove"}).sort({ firstName: 'asc' }).then((products) => {
        res.render("gloves/gloves.html", {products});
    }).catch((e) => res.send("Can not find the products, please try again later."));
});

app.get('/accessories', (req, res) => {   
    Product.find({style: "accessory"}).sort({ firstName: 'asc' }).then((products) => {
        res.render("accessories/accessories.html", {products});
    }).catch((e) => res.send("Can not find the products, please try again later."));
});

app.get('/combinations', (req, res) => {   
    Product.find({style: "combination"}).sort({ firstName: 'asc' }).then((products) => {
        res.render("combinations/combinations.html", {products});
    }).catch((e) => res.send("Can not find the products, please try again later."));
});

app.post('/contactUsForm', (req, res) => {
    var mailOptions = {
        from: 'muratcem95@gmail.com',
        to: 'muratcem95@gmail.com',
        subject: `C.A.K Arts And Crafts: ${req.body.name}`,
        text: `Email: ${req.body.email}; Phone: ${req.body.number}; Message: ${req.body.message}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send("There was an error on our side, please try again later.")
        } else {
            res.render("contactUs/contactUsSuccess.html");
            
            
            var secondMailOptions = {
                from: 'muratcem95@gmail.com',
                to: `${req.body.email}`,
                subject: `C.A.K Arts And Crafts`,
                text: `Thank you for contacting us! We will reply to your inquiry within 48 hours :)`
            };
    
            transporter.sendMail(secondMailOptions);
        };
    });
});

//IO CONNECTIONS
io.on('connection', (socket) => {
    console.log('New user connected.');
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});
    
server.listen(port, () => console.log(`Server is up on port ${port}`));

