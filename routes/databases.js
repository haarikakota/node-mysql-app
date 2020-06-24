const express = require('express');
const router = express.Router();
const db = require('../db/connection');


router.post('/nodemysql', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS nodemysql';

    db.query(sql, (err, result) => {
        if (err) throw err.message;

        console.log(result);

        res.send('Database Created...');
    });
});

module.exports = router;