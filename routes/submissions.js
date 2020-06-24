const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../db/connection');

router.post('/data', (req, res) => {
    res.send({ params: req.params, queryParams: req.query });
});

module.exports = router;