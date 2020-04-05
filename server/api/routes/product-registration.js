const express = require('express');
const router = express.Router();
const connection = require('../../database-connection');
const mysql = require('mysql');

const fs = require('fs');
const path = require('path');

const tokenManager = require('../../token-generator');


router.post('/',(req,res) => {
    //console.log(req.body);
    let token = req.headers.authorization;
    if(!tokenManager.verifyToken){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded = tokenManager.decodeToken(token);

    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name : tokenDecoded.usr_name
    }


    //*Create directory in wich the image will be stored
    let random =  Math.floor(Math.random() * (9999999 - 0 + 1)) + 0;
    let count = 1;
    var dir = path.join(__dirname,`../../public/${userData.usr_name}_${userData.usr_id}/product_${random}`);
    console.log(dir);
    if(!fs.existsSync(dir)) {
        console.log('houd')
        fs.mkdirSync(dir,{recursive:true});   
    }
    
    //*Saving image into public image file relative to server path
    let imageDataUrl = req.body.prod_specs.prod_images;
    let pathImgFolder = [];
    for (let index = 0; index < imageDataUrl.length; index++) {
        

        let base64Data  =   imageDataUrl[index].replace(/^data:([A-Za-z-+\/]+);base64,/, "");
        base64Data  +=  base64Data.replace('+', ' ');
        binaryData  =   new Buffer.from(base64Data, 'base64').toString('binary');

        let url = path.join(dir,`test-image-${random + index}.jpg`);
        pathImgFolder[index] = url;
        fs.writeFile(url, binaryData, "binary", function (err) {
            console.log(err); // writes out file without error, but it's not a valid image
        });
    }

    let storeQuery = 'SELECT store_id FROM `store` WHERE user_usr_id = ?';
    let storeInsert = userData.usr_id;
    let storeIdResult = null;
    connection.query(storeQuery,storeInsert,(error,results,fields) =>{
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            storeIdResult = results.store_id;
        }
    });
    let sqlQuery = `CALL registrateProduct(?,?,?,?,?,?,?,?,?,  ?,  ?,?,?,?,?,?)`;
    let inserts = [
        req.body.prod_specs.prod_code,
        req.body.prod_specs.prod_title,
        req.body.prod_specs.prod_categ,
        req.body.prod_specs.prod_stockAmount,
        req.body.prod_specs.prod_price,
        req.body.prod_specs.prod_discount,
        req.body.prod_specs.prod_discount,
        userData.usr_id, //!the id must exist in the user table
        storeIdResult,

        pathImgFolder.toString(),

        req.body.prod_address.address_streetName,
        req.body.prod_address.address_number,
        req.body.prod_address.address_cep,
        req.body.prod_address.address_city,
        req.body.prod_address.address_state,
        req.body.prod_address.address_country
    ]
    connection.query(sqlQuery,inserts,
        (error, results, fields) => {
        if(error) console.log(error);
        console.log(results);
        res.json({published: true});
    });
});




router.post('/existing-addr',(req,res) => {
    //console.log(req.body);
    let token = req.headers.authorization;
    if(!tokenManager.verifyToken){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded = tokenManager.decodeToken(token);

    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name : tokenDecoded.usr_name
    }


    //*Create directory in wich the image will be stored
    let random =  Math.floor(Math.random() * (9999999 - 0 + 1)) + 0;
    let count = 1;
    var dir = path.join(__dirname,`../../public/${userData.usr_name}_${userData.usr_id}/product_${random}`);
    console.log(dir);
    if(!fs.existsSync(dir)) {
        console.log('houd')
        fs.mkdirSync(dir,{recursive:true});   
    }
    
    //*Saving image into public image file relative to server path
    let imageDataUrl = req.body.prod_specs.prod_images;
    let pathImgFolder = [];
    for (let index = 0; index < imageDataUrl.length; index++) {
        

        let base64Data  =   imageDataUrl[index].replace(/^data:([A-Za-z-+\/]+);base64,/, "");
        base64Data  +=  base64Data.replace('+', ' ');
        binaryData  =   new Buffer.from(base64Data, 'base64').toString('binary');

        let url = path.join(dir,`test-image-${random + index}.jpg`);
        pathImgFolder[index] = url;
        fs.writeFile(url, binaryData, "binary", function (err) {
            console.log(err); // writes out file without error, but it's not a valid image
        });
    }
        

    let storeQuery = 'SELECT store_id FROM `store` WHERE user_usr_id = ?';
    let storeInsert = userData.usr_id;
    let storeIdResult = null;
    connection.query(storeQuery,storeInsert,(error,results,fields) =>{
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            storeIdResult = results.store_id;
        }
    });
    let inserts = [
        req.body.prod_specs.prod_code,
        req.body.prod_specs.prod_title,
        req.body.prod_specs.prod_categ,
        req.body.prod_specs.prod_stockAmount,
        req.body.prod_specs.prod_price,
        req.body.prod_specs.prod_discount,
        req.body.prod_specs.prod_discount,
        userData.usr_id, //!the id must exist in the user table
        storeIdResult,

        pathImgFolder.toString(),

        req.body.prod_addressId,
    ]
    
    sqlQuery = `CALL registrateProductExistingAddr(
        ?,?,?,?,?,?,?,?,?,
        ?,
        ?)`;
    connection.query(sqlQuery,inserts,
        (error, results, fields) => {
        if(error) console.log(error);
        
      
        
        res.json({published: true});
    });
});



module.exports = router;