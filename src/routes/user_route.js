module.exports = function(app, passport) {
    // PROFILE SECTION =========================
    app.get('/', function(req, res) {
        res.render('home', {title: 'Malicafe', user: req.user});
    });

    app.get('/myaccount', isLoggedIn, function(req, res) {
        res.render('account/myaccount', {
            user: req.user
        });
    });

    app.get('/foodmenu', isLoggedIn, function(req, res) {
        res.render('shop/foodmenu', {title: 'Menu', user: req.user});
    });

    app.get('/checkout', isLoggedIn, function(req, res) {
        res.render('shop/checkout', {title: 'Summary', user: req.user});
    });

    // ADMIN
    app.get('/admin/dashboard', isadminLoggedIn, function(req, res) {
        res.render('admin/admin_dashboard', {title: 'Admin Dashboard', user: req.user});
    });

    app.get('/admin/food/menu', isadminLoggedIn, function(req, res) {
        res.render('admin/admin_foodmenu', {title: 'Food Menu', user: req.user});
    });

    app.get('/admin/feedback', isadminLoggedIn, function(req, res) {
        res.render('admin/admin_feedback', {title: 'Feedback', user: req.user});
    });

    app.get('/admin/settings', isadminLoggedIn, function(req, res) {
        res.render('admin/admin_settings', {title: 'Admin Settings', user: req.user});
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    // At my account CLICK LOGO TO HOME (ADDED BY JAMES PUI) ==============================
    app.get('/logo', function(req, res) {
        res.redirect('/');
    });

    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================

    // locally --------------------------------
    // LOGIN ===============================
    // show the login form
    app.get('/login', function(req, res) {
        res.render('account/login', {message: req.flash('loginMessage')});
    });

    app.get('/admin/login', function(req, res) {
        res.render('admin/admin_login', {message: req.flash('loginMessage')});
    });

    // process the login form
    app.post('/adminlogin', passport.authenticate('local-login', {
        successRedirect: '/admin/dashboard', // redirect to the secure profile section
        failureRedirect: '/admin/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/myaccount', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    // SIGNUP =================================
    // show the signup form
    app.get('/register', function(req, res) {
        res.render('account/register', {message: req.flash('signupMessage')});
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/myaccount', // redirect to the secure profile section
        failureRedirect: '/register', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================

    // locally --------------------------------
    app.get('/connect/local', function(req, res) {
        res.render('connect-local', {message: req.flash('loginMessage')});
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));


    // =============================================================================
    // UNLINK ACCOUNTS =============================================================
    // =============================================================================
    // used to unlink accounts. for social accounts, just remove the token
    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        let user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });
};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function isadminLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/admin/login');
}
