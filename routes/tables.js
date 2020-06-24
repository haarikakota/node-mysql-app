const express = require('express');
const router = express.Router();
const db = require('../db/connection');


router.post('/posts', (req, res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS posts(id int AUTO_INCREMENT, title VARCHAR(255),body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('posts table created..');
    });
});

module.exports = router;