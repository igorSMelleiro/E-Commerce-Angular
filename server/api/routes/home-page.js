const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const connection = require('../../database-connection');

const fs = require('fs');
const path = require('path');


router.get('/infinity-board',(req,res,next) => {

    let query = `
        SELECT 
        product.*,
        image.image_url
        FROM product
        INNER JOIN image ON image.product_prod_id = product.prod_id;
    `;
    let inserts = [
        6
    ];
    let allResults = [];
    connection.query(query, inserts, (error, results, fields) => {
        if(error){
            console.log(error);
            return;
        }
        console.log(results);
        for(let r = 0 ; r < results.length; r++){
            let image_files = [];
            image_url_list = [];
            image_url_list[r] = results[r].image_url.toString().split(',');
            
            //takes the first 3 elements from the array
            //console.log(image_url_list[r]);
            //*returns the max of 3 url  
            image_url_list[r] = image_url_list[r].slice(0,1);
            
            for(let i = 0 ; i < image_url_list[r].length; i++){
                if(fs.existsSync(image_url_list[r][i])){
                    image_files[i] = fs.readFileSync(image_url_list[r][i],'base64');
                }
            }
                allResults[r] = {
                    prod_id : results[r].prod_id,
                    prod_price : results[r].prod_price,
                    prod_discount : results[r].prod_discount,
                    prod_owner : results[r].user_usr_id,
                    image_url : image_files,
                    
                }
            }
        res.json(allResults);
    })
})

router.post('/prod-by-categ',(req,res,next) => {
    console.log(req.body);
    let categ = 5;
    connection.query('SELECT product.prod_categ FROM product WHERE prod_id = ?',[req.body.prod_id],(error,results,fields) => {
        if(error){
            console.log(error);
            return;
        }
        console.log(results);
        if(results.length > 0){
            categ = results.prod_categ;
        }
      
        let query = `
        SELECT 
        product.*,
        image.image_url
        FROM product
        INNER JOIN image ON image.product_prod_id = product.prod_id
        WHERE product.prod_categ = ?;
    `;
    let inserts = [
        categ
    ];
    let allResults = [];
        connection.query(query, inserts, (error, results, fields) => {
            if(error){
                console.log(error);
                return;
            }
            console.log(results);
            for(let r = 0 ; r < results.length; r++){
                let image_files = [];
                image_url_list = [];
                image_url_list[r] = results[r].image_url.toString().split(',');
                
                //takes the first 3 elements from the array
                //console.log(image_url_list[r]);
                //*returns the max of 3 url  
                image_url_list[r] = image_url_list[r].slice(0,1);
                
                for(let i = 0 ; i < image_url_list[r].length; i++){
                    if(fs.existsSync(image_url_list[r][i])){
                        image_files[i] = fs.readFileSync(image_url_list[r][i],'base64');
                    }
                }
                    allResults[r] = {
                        prod_id : results[r].prod_id,
                        prod_price : results[r].prod_price,
                        prod_discount : results[r].prod_discount,
                        prod_owner : results[r].user_usr_id,
                        image_url : image_files,
                        
                    }
                }
            res.json(allResults);
        })
    })
    
})

module.exports = router;