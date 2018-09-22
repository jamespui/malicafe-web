let express = require('express');
let app = express();
let favicon = require('serve-favicon');
let path = require('path');
let mongoose = require('mongoose');
let passport = require('passport');
let flash = require('connect-flash');

let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require('express-session');

let routing = require('./routes/index');
let configDB = require('./config/database');

// configuration ===============================================================
mongoose.promise = global.Promise;
mongoose.connect(configDB.url, {useNewUrlParser: true}); // connect to our database
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('Malicafe Database is Connected');
});

require('../src/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({extended: true}));

// file
// View filetype .pug
app.set('view engine', 'pug');
// Templates
app.set('views', path.join(__dirname, '..', 'views'));
// Static
app.use('/static', express.static(path.join(__dirname, '..', 'static')));

// session
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Routing link
app.use(routing);
require('./routes/user_route.js')(app, passport);

app.use(favicon(path.join(__dirname, '..', 'static', 'favicon', 'favicon.png')));

const portNumber = 3223;

app.listen(portNumber, function() {
    console.log('listening on port ' + portNumber + '!');
    console.log(
        '\n\nGo to your browser and type this: http://localhost:' + portNumber
    );
});
