const express = require('express');
const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodemysql'
});

//Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql connected...');
});


const app = express();

//Create db
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS nodemysql';

    db.query(sql, (err, result) => {
        if (err) throw err.message;

        console.log(result);

        res.send('Database Created...');
    });
});

//Create table
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS posts(id int AUTO_INCREMENT, title VARCHAR(255),body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('posts table created..');
    });
});


//Insert post two
app.get('/addpost/:id', (req, res) => {
    let posts = { title: `post ${req.params.id}`, body: `This is post number ${req.params.id}` };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, posts, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(`post ${req.params.id} created...`);
    });
});


//select posts
app.get('/getposts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send('post fetched...');
    });
});

//select single post
app.get('/getpost/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('post fetched...');
    });
});

//Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('post updated...');
    });
});

//Delete post
app.get('/deletepost/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('post deleted...');
    });
});



app.listen('1234', () => {
    console.log('server started on port 1234');
});