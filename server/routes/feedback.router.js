const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET router
router.get('/', (req, res) => {
    // Find all orders and return them
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error);
        res.sendStatus(500);  
    });
})

// POST Router
// router.post()