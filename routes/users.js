const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../db/connection');

router.post('/submitform', (req, res) => {
    let sql = `INSERT 
                INTO users (username,password) 
                VALUES (${JSON.stringify(req.body.username)}, ${JSON.stringify(req.body.password)})`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/login');
    });
});

module.exports = router;