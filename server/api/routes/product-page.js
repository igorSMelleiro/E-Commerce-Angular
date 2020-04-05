const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const connection = require('../../database-connection');
const tokenManager = require('../../token-generator')


const fs = require('fs');
const path = require('path');

router.post('/', (req,res,next)=>{

    query = `SELECT * FROM v_search_res_prods WHERE prod_id = '${req.body.prod_id}%' AND usr_id = '${req.body.usr_id}';`
    
    
    connection.query(query, (error,results,fields)=> {
        if(error){
            console.log(error);
        }

        //* transform image_url in an array of urlString
        if(!results.length > 0){
            console.log(results);
            return;
        }

        let image_url_list = [];

        //!for each results loop thru images_url
        
        let allResults = [];
        for(let r = 0 ; r < results.length; r++){
            let image_files = [];
            image_url_list[r] = results[r].image_url.toString().split(',');
            console.log(image_url_list[r]);
            for(let i = 0 ; i < image_url_list[r].length; i++){
                if(fs.existsSync(image_url_list[r][i])){
                    
                    image_files[i] = fs.readFileSync(image_url_list[r][i],'base64');
                }
            }
            allResults[r] = {
                prod_id : results[r].prod_id,
                prod_title : results[r].prod_title,
                prod_stockAmount : results[r].prod_stockAmount,
                prod_price : results[r].prod_price,
                prod_discount : results[r].prod_discount,
                prod_shippingfee : results[r].prod_shippingfee,
                image_url : image_files,
                usr_name: results[r].usr_name,
                usr_id : results[r].usr_id,
                store_name : results[r].store_name,
                store_phone : results[r].store_phone,
                store_cellphone : results[r].store_cellphone,
            }
        }
        res.json(allResults);
    })
    
});


router.post('/reg-favorite',(req,res,next) =>{
    const token = req.headers.authorization;
    let usrData = { 
        usr_id : null
    };
    if(tokenManager.verifyToken(token)){
        const tokenDecoded = tokenManager.decodeToken(token);
        usrData =  {
            usr_id : tokenDecoded.usr_id
        }
    }
    
    insert = [usrData.usr_id,req.body.prod_id];
    connection.query("SELECT *  FROM `cart` WHERE user_usr_id = ? AND product_prod_id = ?;", insert,(error,results,fields) =>{
        if(error){
            console.log(error);
            return;
        }
        if(results.length < 1){
            let query = 'CALL setUserFavorite(?,?)';
            connection.query(query,insert, (error,results,fields)=>{
                if(error){
                    console.log(error);
                    return ;
                }
                if(results.length > 0){
                    console.log(results);
                }
            })
        }
        else{
            let query = 'CALL removeFromCart(?,?)'
            connection.query(query,insert, (error,results,fields) => {
                if(error){
                    console.log(error);
                    return;
                }
                if(results.length > 0){
                    res.json(results);
                }
            })
        }
    })
})

router.post('/addCart',(req,res) => {
    const token = req.headers.authorization;
    let usrData = { 
        usr_id : null
    };
    if(!tokenManager.verifyToken(token)){
        console.log('não autorizado');
        return ;
    }
    const tokenDecoded = tokenManager.decodeToken(token);
        usrData =  {
            usr_id : tokenDecoded.usr_id
        }
    query = 'CALL addToCart(?,?)';
    insert = [usrData.usr_id,req.body.prod_id];
    console.log(insert);
    connection.query(query,insert, (error,results,fields)=>{
        if(error){
            console.log(error);
            return;
        }
        if(results.length > 0){
          res.json(results);
        }
        console.log(results);
    })
})


router.post('/get-comments',(req,res)=> {
    let query = `
    SELECT 
    comments.*,
    user.usr_name
    FROM comments
    INNER JOIN user ON comments.user_usr_id = user.usr_id
    WHERE comments.product_prod_id = ?
    `;
    let insert = [
        req.body.prod_id
    ]
    connection.query(query,insert,(error, results,fields)=> {
        if(error){
            console.log(error);
            return;
        }
        console.log(results);
        res.json(results);
    })
})
router.post('/set-comments',(req,res) => {
    const token = req.headers.authorization;
    let usrData = { 
        usr_id : null
    };
    if(!tokenManager.verifyToken(token)){
        console.log('não autorizado');
        return ;
    }
    const tokenDecoded = tokenManager.decodeToken(token);
        usrData =  {
        usr_id : tokenDecoded.usr_id
    }
    console.log(req.body);
    let query = 'CALL createComment(?,?,?,?)';
    let inserts = [
        req.body.user_comment,
        req.body.prod_id,
        req.body.owner_id,
        req.body.usr_id 
    ]
    connection.query(query,inserts, (error, results, fields)=> {
        if(error){
            console.log(error);
            return;
        }
        console.log(results);
        res.json(results);
    })
})
module.exports = router;