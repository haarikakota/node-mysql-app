const express = require('express');
const mysql = require('mysql');

//Rendering HTML File 
const http = require('http');
const fs = require('fs');


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


app.get('/', (req, res) => {
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


app.post('/submit', (req, res) => {
    res.send({ params: req.params, queryParams: req.query });
});


app.post('/nodemysqldb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS nodemysql';

    db.query(sql, (err, result) => {
        if (err) throw err.message;

        console.log(result);

        res.send('Database Created...');
    });
});


app.post('/poststable', (req, res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS posts(id int AUTO_INCREMENT, title VARCHAR(255),body VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('posts table created..');
    });
});


app.post('/posts/:id', (req, res) => {
    let posts = { title: `post ${req.params.id}`, body: `This is post number ${req.params.id}` };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, posts, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(`post ${req.params.id} created...`);
    });
});


app.get('/posts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});


app.get('/posts/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.put('/posts/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.delete('/posts/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});



app.listen('1234', () => {
    console.log('server started on port 1234');
});