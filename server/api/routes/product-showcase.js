const express = require('express');
const router = express.Router();
var connection = require('../../database-connection');

router.get('/',(req,res) => {   

    connection.query("SELECT * FROM product" ,(error,results,fields) => {
        if(error) throw error;
        res.json(results);
    });
});

module.exports = router;