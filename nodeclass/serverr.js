const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

let users = [
    { id: 1, username: 'Ayush', password: 'ayush' },
    { id: 2, username: 'Chahal', password: 'chahal' }
];

// Middleware to authenticate user
function authenticate(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        return res.redirect('/login');
    }
}

// Route to serve login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

// Route to handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = user;
        res.redirect('/protected');
    } else {
        res.status(401).send('Invalid username or password');
    }
});
// Route to handle logout
app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/login');
});
// Route to serve dashboard
app.get('/protected', authenticate, (req, res) => {
    res.send('Welcome to the dashboard, ' + req.session.user.username);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});