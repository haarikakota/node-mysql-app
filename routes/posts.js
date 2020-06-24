const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../db/connection');


router.post('/:id', (req, res) => {
    let posts = { title: `post ${req.params.id}`, body: `This is post number ${req.params.id}` };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, posts, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(`post ${req.params.id} created...`);
    });
});


router.get('/', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});


router.get('/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


router.put('/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


router.delete('/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


module.exports = router;