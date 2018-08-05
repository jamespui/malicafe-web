const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routing = require('./routes');

mongoose.promise = global.Promise;

const app = express();

// View filetype .pug
app.set('view engine', 'pug');

// Templates
app.set('views', path.join(__dirname, '..', 'views'));

// Static
app.use('/static', express.static(path.join(__dirname, '..', 'static')));

// Middleware to parse POST request & cookies
// Must include if you want to parse POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Routing link
app.use(routing);

app.use(favicon(path.join(__dirname, '..', 'static', 'favicon', 'favicon.png')));

const portNumber = 3018;

app.listen(portNumber, function() {
    console.log('listening on port ' + portNumber + '!');
    console.log(
        '\n\nGo to your browser and type this: http://localhost:' + portNumber
    );
});
