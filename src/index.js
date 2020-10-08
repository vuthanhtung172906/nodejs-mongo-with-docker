const express = require('express')
const ConnectDB = require('./config/db')
const key = require('./config/main')
const ejs = require('ejs')
const { port, mongoURL } = key;
ConnectDB(mongoURL);
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(port, () => {
    console.log('App is running on port ', port)
})

app.get('/', (req, res) => {
    res.render('index')
});
app.get('/index', (req, res) => {
    res.render('index')
});
app.get('/post', (req, res) => {
    res.render('post')
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/contact', (req, res) => {
    res.render('contact')
})