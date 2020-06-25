const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../db/connection');

router.post('/data', (req, res) => {
    let sql = `SELECT * FROM users 
                WHERE username= ${JSON.stringify(req.body.username)} AND 
                password=${JSON.stringify(req.body.password)}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        if (Array.isArray(result) && result.length >= 1) {
            res.redirect('/');
        }
        else {
            res.redirect('/signup');
        }
    });
});

module.exports = router;