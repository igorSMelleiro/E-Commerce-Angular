const express = require('express');
const router = express.Router();
const connection = require('../../database-connection');
const tokenManager = require('../../token-generator');


router.post('/single-prod-finalization-existing-address',(req,res) => {
    const token = req.headers.authorization;
    if(!tokenManager.verifyToken(token)){
        console.log('not authorized');
        return;
    }
    console.log(req.body.prod_id[0]);
    let tokenDecoded = {
        usr_id : tokenManager.decodeToken(token).usr_id
    }
    let prodId = req.body.prod_id[0];
    let amount = req.body.amount;
    let addressId = req.body.address;

    let allQueryResults = []
    let buyed = false
    for (let index = 0; index < prodId.length; index++) {
        connection.query('SELECT * FROM `product` WHERE prod_id = ?',[prodId[index]],(error,results,fields) =>{
            if(error) {
                console.log(error);
                return;
            }
            if(results.length > 0){
                general_inserts = [
                    tokenDecoded.usr_id,
                    prodId[index],
                    results[0].user_usr_id,
                    amount[index],
                    1, //Buy
                    1, // status, aprovado
                    results[0].store_store_id,
                    addressId
                ]  
                query = 'CALL sellTransactionExistingAddress(?,?,?,?,?,?,?,?)';
                connection.query(query, general_inserts,(error, results, fields) => {
                    if(error) {
                        console.log(error);
                        return;
                    }
                    allQueryResults[index] = results; 
                    console.log(results);
                    if(Object.keys(results).length > 0 ){
                        buyed=true;

                    }else{
                        buyed=false;
                        
                    }
                    
                })
            }
        })
    }
    res.json({buyed: true});
});






router.post('/single-prod-finalization-no-address',(req,res) => {
    const token = req.headers.authorization;
    if(!tokenManager.verifyToken(token)){
        console.log('not authorized');
        return;
    }
    let tokenDecoded = {
        usr_id : tokenManager.decodeToken(token).usr_id
    }
    let prodId = req.body.prod_id;
    let amount = req.body.amount;
    let addressData = req.body.address;

    let allQueryResults = []
    console.log(req.body);
    let address_inserts = [
        addressData[0],
        addressData[1],
        addressData[2],
        addressData[3],
        addressData[4],
        addressData[5],
    ]
    connection.query(`INSERT INTO address (address_streetName, address_number, address_cep,address_city, address_state,address_country)
        VALUES (?,?,?,?,?,?);`, address_inserts,(error,results1,fields) => {
            if(error){
                console.log(error);
            }
        connection.query(`INSERT INTO user_has_address (user_usr_id,address_address_id) VALUES (?,?);`, [tokenDecoded.usr_id,results1.insertId],(error, results2,fields) => {
            if(error){
                console.log(error);
            }
            for (let index = 0; index < prodId.length; index++) {
                connection.query('SELECT * FROM `product` WHERE prod_id = ?',[prodId[index]],(error,results3,fields) =>{
                    if(error) {
                        console.log(error);
                        return;
                    }
                    if(results3.length > 0){
                        general_inserts = [
                            tokenDecoded.usr_id,
                            prodId[index],
                            results3[0].user_usr_id,
                            amount[index],
                            1, //Buy
                            1, // status, aprovado
                            results3[0].store_store_id,
                            results1.insertId 
                        ]  
                        query = `CALL sellTransactionExistingAddress(?,?,?,?,?,?,?,?)`;
                        connection.query(query, general_inserts,(error, results4, fields) => {
                            if(error) {
                                console.log(error);
                                return;
                            }
                            if(results4.length > 0){
                                allQueryResults[index] = results4; 
                                console.log(results4);
                            }
                        })
                    }
                })
            }
        })
    })
    res.json(allQueryResults);
});


router.get('/get-cart', (req,res) => {
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        return;
    }
    const tokenDecoded = {
        usrId : tokenManager.decodeToken(token).usr_id
    }

    query = 'CALL getUserCartProds(?)';
    
    connection.query(query,[tokenDecoded.usrId], (error,results,fields)=>{
        if(error) {
            console.log(error);
            return;
        }
        if(results.length > 0){
            res.json(results);
        }
    })
})

router.post('/remove-from-cart', (req,res) => {
    const token = req.headers.authorization;
    console.log(req.body);
    if(!tokenManager.verifyToken(token)){
        return;
    }
    const tokenDecoded = {
        usrId : tokenManager.decodeToken(token).usr_id
    }

    let query = 'DELETE FROM cart WHERE product_prod_id = ?  AND user_usr_id = ?';
    
    connection.query(query,[req.body.prod_id,tokenDecoded.usrId], (error,results,fields)=>{
        if(error) {
            console.log(error);
            return;
        }
        
        console.log(results);
        res.json(results);
     
    })
})


var getImagesFromDriver = (results) => {
    //!for each results loop thru images_url

    let image_files = [];
    image_url_list = results.image_url.toString().split(',').slice(0.1);
    console.log(image_url_list[0]);
    //*returns the max of 3 url  
    for(let i = 0 ; i < image_url_list.length; i++){
        if(fs.existsSync(image_url_list[i])){
            image_files[i] = fs.readFileSync(image_url_list[i],'base64');
        }
    }
    return image_files;
}

module.exports = router;