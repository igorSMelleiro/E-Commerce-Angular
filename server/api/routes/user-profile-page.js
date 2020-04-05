const connection = require('../../database-connection');
const express =  require('express');
const route = express.Router();
const tokenManager = require('../../token-generator');

const fs = require('fs');
const path = require('path');


route.get('/buyed', (req,res,next) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    connection.query('CALL getBuyedProducts(?)',[userData.usr_id], (error,results,fields) => {
        if(error){
            console.log(error);
            return;
        }
        if(results.length > 0){
            //!for each results loop thru images_url
        var allResults = [];
        let image_url_list = [];
        for(let r = 0 ; r < results[0].length; r++){
            let image_files = [];
            image_url_list = [];
            image_url_list[r] = results[0][r].image_url.toString().split(',');
            
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
                    order_amount : results[0][r].order_amount,
                    order_type : results[0][r].order_type,
                    order_status : results[0][r].order_status,
                    order_reqTime : results[0][r].order_reqTime,
                    prod_id : results[0][r].prod_id,
                    prod_title : results[0][r].prod_title,
                    prod_cost : results[0][r].prod_price * (1 - (results[0][r].prod_discount/100)),
                    prod_shippingfee : results[0][r].prod_shippingfee,
                    prod_ownerId : results[0][r].user_usr_id,
                    buyer_name : results[0][r].buyer_name,
                    buyer_email : results[0][r].buyer_email,
                    seller_name : results[0][r].seller_name,
                    seller_email : results[0][r].seller_email,
                    bad1 : results[0][r].bad1,
                    bad2 : results[0][r].bad2,
                    bad3 : results[0][r].bad3,
                    bad4 : results[0][r].bad4,
                    bad5 : results[0][r].bad5,
                    bad6 : results[0][r].bad6,

                    sad1 : results[0][r].sad1,
                    sad2 : results[0][r].sad2,
                    sad3 : results[0][r].sad3,
                    sad4 : results[0][r].sad4,
                    sad5 : results[0][r].sad5,
                    sad6 : results[0][r].sad6,
                    store_id : results[0][r].store_store_id,
                    image_url : image_files,
                    store_name : results[0][r].store_name,
                    store_phone : results[0][r].store_phone,
                    store_cellphone : results[0][r].store_cellphone
                }
            }
        }
        //console.log(results[0]);
        res.json(allResults);
    })
})

route.get('/selled',(req,res,next) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    connection.query('CALL getSelledProducts(?)',[userData.usr_id], (error,results,fields) => {
        if(error){
            console.log(error);
            return;
        }
        if(results.length > 0){
            //!for each results loop thru images_url
        var allResults = [];
        let image_url_list = [];
        for(let r = 0 ; r < results[0].length; r++){
            let image_files = [];
            image_url_list = [];
            image_url_list[r] = results[0][r].image_url.toString().split(',');
            
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
                    order_amount : results[0][r].sell_amount,
                    order_type : results[0][r].order_type,
                    order_status : results[0][r].sell_status,
                    order_reqTime : results[0][r].sell_reqTime,
                    prod_id : results[0][r].prod_id,
                    prod_title : results[0][r].prod_title,
                    prod_cost : results[0][r].prod_price * (1 - (results[0][r].prod_discount/100)),
                    prod_shippingfee : results[0][r].prod_shippingfee,
                    prod_ownerId : results[0][r].user_usr_id,
                    buyer_name : results[0][r].buyer_name,
                    buyer_email : results[0][r].buyer_email,
                    seller_name : results[0][r].seller_name,
                    seller_email : results[0][r].seller_email,
                    bad1 : results[0][r].bad1,
                    bad2 : results[0][r].bad2,
                    bad3 : results[0][r].bad3,
                    bad4 : results[0][r].bad4,
                    bad5 : results[0][r].bad5,
                    bad6 : results[0][r].bad6,

                    sad1 : results[0][r].sad1,
                    sad2 : results[0][r].sad2,
                    sad3 : results[0][r].sad3,
                    sad4 : results[0][r].sad4,
                    sad5 : results[0][r].sad5,
                    sad6 : results[0][r].sad6,
                    store_id : results[0][r].store_store_id,
                    image_url : image_files,
                    store_name : results[0][r].store_name,
                    store_phone : results[0][r].store_phone,
                    store_cellphone : results[0][r].store_cellphone
                }
            }
        }
        //console.log(allResults);
        res.json(allResults);
    })
})

route.get('/get-posted-product', (req,res) => {
    //console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        console.log('não autorizado');
        return res.json({message : 'Action not Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    query = 'CALL getPostedProducts(?)';
    insert = userData.usr_id;
    //console.log(insert);
    var allResults = [];
    connection.query(query,[insert],(error,results,fields) => {
        //console.log(results);
        if(error){
            console.log(error);
            return
        }
        
        let image_url_list = [];
        console.log(results[0]);
        
        for(let r = 0 ; r < results[0].length; r++){
            let image_files = [];
            image_url_list = [];
            image_url_list[r] = results[0][r].image_url.toString().split(',');
            //takes the first 3 elements from the array
            //*returns the max of 3 url  
            image_url_list[r] = image_url_list[r].slice(0,1);
            
            for(let i = 0 ; i < image_url_list[r].length; i++){
                if(fs.existsSync(image_url_list[r][i])){
                    image_files[i] = fs.readFileSync(image_url_list[r][i],'base64');
                }
            }

            allResults[r] = {
                prod_id : results[0][r].prod_id,
                prod_categ : results[0][r].prod_categ,
                prod_visits : results[0][r].prod_visits,
                prod_title : results[0][r].prod_title,
                prod_stockAmount : results[0][r].prod_stockAmount,
                prod_price : results[0][r].prod_price * (1 - (results[0][r].prod_discount/100)),
                prod_discount : results[0][r].prod_discount,
                prod_shippingfee : results[0][r].prod_shippingfee,
                prod_ownerId : results[0][r].user_usr_id,
                prod_insertTime : results[0][r].prod_insertTime,
                image_url : image_files,
                address_id : results[0][r].address_id,
                address_streetName : results[0][r].address_streetName,
                address_number : results[0][r].address_number,
                address_cep : results[0][r].address_cep,
                address_country : results[0][r].address_country,
                address_state : results[0][r].address_state,
                address_city : results[0][r].address_city
            }
        }
        //console.log(allResults);
        res.json(allResults);
    })
})


route.get('/get-addresses',(req,res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    query = 'CALL getUserAddresses(?)';
    insert = userData.usr_id;
    connection.query(query,[insert], (error,results,fields) => {
        if(error) {
            console.log(error)
            return;
        }
        res.json(results);
    })
})

route.get('/get-credit-cards',(req,res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    query = 'CALL getUserCredCards(?)';
    insert = userData.usr_id;
    connection.query(query,[insert], (error,results,fields) => {
        if(error) {
            console.log(error)
            return;
        }
        res.json(results);
    })
})

route.get('/get-general-info',(req,res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    query = 'CALL getProfileInfo(?)';
    insert = userData.usr_id;
    connection.query(query,[insert], (error,results,fields) => {
        if(error) {
            console.log(error)
            return;
        }
        res.json(results);
    })
})


route.put('/update-profile', (req,res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    let body = req.body;

    connection.query()
});

route.put('/update-address', (req,res) => {
    console.log(req.body);
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    let body = req.body;

    query = 'CALL updateAddress(?,?,?,?,?,?,?)';
    inserts = [
        req.body.address_id,
        req.body.address_streetName,
        req.body.address_number,
        req.body.address_cep,
        req.body.address_city,
        req.body.address_state,
        req.body.address_country,
        
    ]
    connection.query(query, inserts, (error,results,fields) => {
        if(error){
            console.log(error);
            return;
        }
        console.log(results);
        res.json(results);
    })
});
route.post('/delete-address',(req,res)=>{
    console.log(req.body);
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    let body = req.body;

    query = 'CALL deleteAddress(?,?)';
    inserts = [
        req.body.address_id, 
        userData.usr_id
    ]
    connection.query(query, inserts, (error,results,fields) => {
        if(error){
            console.log(error);
            return;
        }
        console.log(results);
        res.json(results);
    })
})

route.post('/delete-posted-prod', (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    console.log(req.body);
    query = 'CALL deletePublishedProduct(?)';
    insert = req.body.prod_id;
    connection.query(query,[insert], (error,results,fields) => {
        if(error) {
            console.log(error)
            return;
        }
        console.log(results);
        if(Object.keys('OkPacket').length > 0){
            res.json({deleted:true});
        }else{
            res.json({deleted:false});
        }
       
    })
})

route.post('/edit-posted-prod', (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    console.log(req.body);
    query = 'CALL deletePublishedProduct(?)';
    insert = req.body.prod_id;
    connection.query(query,[insert], (error,results,fields) => {
        if(error) {
            console.log(error)
            return;
        }
        console.log(results);
        if(Object.keys('OkPacaket').length > 0){
            res.json({deleted:true});
        }else{
            res.json({deleted:false});
        }
    })
})

route.get('/get-store-data', (req,res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    let query=  'SELECT * FROM store WHERE user_usr_id = ?';
    let insert = userData.usr_id;
    connection.query(query,insert,(error, results, fields) => {
        if(error) {
            console.log(error)
            return;
        }
       console.log(results);
       res.json(results);
    })
})


route.post('/reg-store',(req,res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return res.json({message : 'Action not  Authorized'});
    }
    let tokenDecoded =  tokenManager.decodeToken(token);
    let userData = {
        usr_id : tokenDecoded.usr_id,
        usr_name :  tokenDecoded.usr_name
    }
    let query = 'CALL registrateStore(?,?,?,?,?)';
    let insert = [
        req.body.store_name,
        req.body.store_cnpj,
        req.body.store_phone,
        req.body.store_cellphone,
        userData.usr_id
    ];
    connection.query(query,insert, (error, results, fields) => {
        if(error) {
            console.log(error)
            return;
        }
        res.json(results);
    })
})
module.exports = route;
