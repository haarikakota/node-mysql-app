const express = require('express');
const router = express.Router();
const fs = require('fs');
const db = require('../db/connection');

router.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./views/index.html', null, (err, result) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        }
        else {
            res.write(result);
        }

        res.end();
    });
});

router.get('/login', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./views/login.html', null, (err, result) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        }
        else {
            res.write(result);
        }

        res.end();
    });
});


router.get('/signup', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./views/signup.html', null, (err, result) => {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        }
        else {
            res.write(result);
        }
        res.end();
    });
});


module.exports = router;