const express = require('express');
const router = express.Router();

//*child routes
require('./user-profile-page');

//*file stream
const fs = require('fs');
const path = require('path');

const tokenManager = require('../../token-generator');


//* Autentication End
const connection = require('../../database-connection');


router.get('/user-profile-data', (req,next) => {
    const authToken = req.headers.authorization;
    if(!tokenManager.verifyToken(authToken)){
        console.log("not Authorized");
        return;
    }
    const tokenDecoded =  tokenManager.decodeToken(authToken);
    connection.query(`CALL getProfileData(?)`, [tokenDecoded.usr_id] ,(error,result,fields)=> {
        if(error) {
            console.log(error);
            return;
        }
        
        if(result.length > 0){
            next.json({
                user_name : result[0][0].usr_name,
                user_email :  result[0][0].usr_email,
                //user Details Data
                user_detail_id :  result[0][0].usrdetail_id,
                user_detail_firstphone :  result[0][0].usrdetail_firstphone, 
                user_detail_secondphone :  result[0][0].usrdetail_secondphone,
                user_detail_birthday :  result[0][0].usrdetail_birthday,
                user_detail_cpf :  result[0][0].usrdetail_cpf,
                //card
                user_card_id :  result[0][0].card_id,
                user_card_number :  result[0][0].card_number,
                user_card_owner_name :  result[0][0].card_owner_name,
                user_expiration_data :  result[0][0].user_expiration_data,    
                //store 
                user_store_id :  result[0][0].store_id,
                user_store_name :   result[0][0].store_name,
                user_store_cnpj :   result[0][0].store_cnpj,
                user_store_phone :  result[0][0].store_phone, 
                user_store_cellphone :   result[0][0].store_cellphone
            });
        }
        else{
            next.json({
                user_image : result.usr_image,
                user_name : result.usr_name,
                user_email :  result.usr_email,
                //user Details Data
                user_detail_id :  result.usrdetail_id,
                user_detail_firstphone :  result.usrdetail_firstphone, 
                user_detail_secondphone :  result.usrdetail_secondphone,
                user_detail_birthday :  result.usrdetail_birthday,
                user_detail_cpf :  result.usrdetail_cpf,
                //card
                user_card_id :  result.card_id,
                user_card_number :  result.card_number,
                user_card_owner_name :  result.card_owner_name,
                user_expiration_data :  result.user_expiration_data,    
                //store 
                user_store_id :  result.store_id,
                user_store_name :   result.store_name,
                user_store_cnpj :   result.store_cnpj,
                user_store_phone :  result.store_phone, 
                user_store_cellphone :   result.store_cellphone
            });
        }
    });
});

router.get('/user-address',(req,next) => {
    const authToken = req.headers.authorization;
    if(!tokenManager.verifyToken(authToken)){
        console.log("not Authorized");
        return;
    }
    const tokenDecoded =  tokenManager.decodeToken(authToken);
    connection.query(`CALL getUserAddresses(?)`, [tokenDecoded.usr_id] ,(error,result,fields)=> {
        if(error) {
            console.log(error);
            return;
        }
        if(result.length > 0){
            next.json(result);
        }
        else{
            next.json(result);
        }
    });
})


router.post('/signin',(req,res) => {
    
    let query = "SELECT usr_id,usr_image,usr_name, usr_email FROM user WHERE usr_email = ? AND usr_password = ?; ";
    let inserts = [req.body.user_email, req.body.user_password];
    connection.query( query, inserts,(error,results ,fields) => {
        //console.log(inserts);
        //console.log(results);
        if(error) {
            console.log(error);
            return res.json({
                user_id : null,
                user_image : null,
                user_name : null,
                user_email : null,
                user_token : '',
                user_validated : false
            }) ;
        }
        //console.log(results);
        try {
            //*create the token if the result of the query returns something
            if(results.length > 0 ){
                
                const token =  tokenManager.generateToken({
                    usrId : results[0].usr_id,
                    usrName : results[0].usr_name,
                    usrEmail : results[0].usr_email
                });
                let image_url = results[0].usr_image.toString().split(',');
                console.log(image_url);
                let image_base64 = '';
                if(fs.existsSync(image_url[0])){
                    console.log('exists');
                    image_base64 = fs.readFileSync(image_url[0],'base64');
            
                }
                
                res.json({
                    user_id : results[0].usr_id,
                    user_image : image_base64,
                    user_name : results[0].usr_name,
                    user_email : results[0].usr_email,
                    user_token : token,
                    user_validated : true
                }) 
            }
            else return res.json({
                user_id : null,
                user_image : null,
                user_name : null,
                user_email : null,
                user_token : '',
                user_validated : false
            }) ;
        } catch (error) {
            console.log(error);
            return res.json({
                user_id : null,
                user_image : null,
                user_name : null,
                user_email : null,
                user_token : '',
                user_validated : false
            }) ;
        }
    });
});







router.post('/signup',(req,res) => {

    console.log(req.body);

    let dir = path.join(__dirname,'../../public/place_holders/profile-images/thumbnail.png');
    if(!fs.existsSync(dir)) {
        console.warn('File Does not Exist');
        fs.mkdirSync(dir,{recursive:true});   
    }

    let inserts =  {
        usr_image : dir,
        usr_name : req.body.user_name,
        usr_email : req.body.user_email,
        usr_password : req.body.user_password
    }   
    //console.log(inserts);
    let query ="INSERT INTO user SET ?;";
    console.log(res.body);
    connection.query( query, inserts ,(error,results,fields) => {
        console.log(results);
        if(error) {
            console.log(error);
            res.json({
                user_id : null,
                user_image : null,
                user_name : null,
                user_email : null,
                user_token : '',
                user_validated : false
            }) ;
            return;
        }
        connection.query(`SELECT * FROM user WHERE usr_id = ${results.insertId}`,(error2,results2,fields2)=>{
            if (error2) {
                console.log(error2);
                res.json({
                    user_id : null,
                    user_image : null,
                    user_name : null,
                    user_email : null,
                    user_token : '',
                    user_validated : false
                }) ;
            };
            console.log(results2);
            if(results2.length > 0 ){
                const token =  tokenManager.generateToken({
                    usrId : results2[0].usr_id,
                    usrName : results2[0].usr_name,
                    usrEmail : results2[0].usr_email
                });
                // the image directory
                let image_url = dir;
                let image_base64 = '';
                if(fs.existsSync(image_url)){
                    image_base64 = fs.readFileSync(image_url,'base64');
                }
                
                res.json({
                    user_id : results2[0].usr_id,
                    user_image : image_base64,
                    user_name : results2[0].usr_name,
                    user_email : results2[0].usr_email,
                    user_token : token,
                    user_validated : true
                }) 
            }
            else{
                res.json({
                    user_id : null,
                    user_image : null,
                    user_name : null,
                    user_email : null,
                    user_token : '',
                    user_validated : false
                }) ;
            }
        })
    });
});


router.patch('/update-profile-pic',(req,res,next) => {
    
    const token = req.headers.authorization;
    
    if(!tokenManager.verifyToken(token)){
        res.json({
            user_id : null,
            user_image : null,
            user_name : null,
            user_email : null,
            user_token : '',
            user_validated : false
        });
        return;
    }
    const tokenDecoded = tokenManager.decodeToken(token);
    const userData = {
        usrId : tokenDecoded.usr_id,
        userName : tokenDecoded.usr_name
    }
    
    let dir = path.join(__dirname,`../../public/${userData.userName}_${userData.usrId}/profile_picture/${userData.userData}/profile-image`);
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir,{recursive:true});
    }

    let imageBuffer = req.body.image;

    let base64Data  =   imageBuffer.replace(/^data:([A-Za-z-+\/]+);base64,/, "");
    base64Data  +=  base64Data.replace('+', ' ');
    binaryData  =   new Buffer.from(base64Data, 'base64').toString('binary');

    let url = path.join(dir,`profile-image.jpg`);
    fs.writeFile(url, binaryData, "binary", function (err) {
        console.log(err); // writes out file without error, but it's not a valid image
    });

    let sqlQuery = 'UPDATE `user` SET usr_image = ? WHERE usr_id = ? ';
    connection.query(sqlQuery, [url,userData.usrId], (err,result,fields) =>{
        if(err) {
            console.log(err);
            return;
        };
        connection.query('SELECT usr_image FROM `user` WHERE usr_id = ?;', [userData.usrId],(err2,result2,field2)=>{
            if(err2) {
                console.log(err2);
                return;
            }
            if(result2.length > 0){
                let base64Image = '';
                if(fs.existsSync(result2[0].usr_image)){
                    console.log('profile pic path exists');
                    base64Image = fs.readFileSync(result2[0].usr_image,'base64');
                }
                res.json([{usr_image : base64Image}]);   
            }
        })
    });
})

router.get('/get-cart-user',(req,res)=>{
    const token = req.headers.authorization;
    if(!tokenManager.verifyToken(token)){
        console.log("Not Authorized address");
        return ;
    }
    let tokenDecoded = {
        usr_id : tokenManager.decodeToken(token).usr_id
    }
    let allResults = []
    connection.query('CALL getUserCartProds(?)',[tokenDecoded.usr_id],(error, results, fields)=>{
        if(error) {
            console.log(error);
            return;

        }
        console.log('###################################################################')
        console.log(results);
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
        res.json(allResults);
    });
})

router.get('/get-credcard',(req,res) => {
    const token = req.headers.authorization;
    if(!tokenManager.verifyToken(token)){
        console.log("Not Authorized address");
        return ;
    }
    let tokenDecoded = {
        usr_id : tokenManager.decodeToken(token).usr_id
    }
    connection.query('SELECT * FROM `card` WHERE user_usr_id = ?',[tokenDecoded.usr_id],(error, results, fields)=>{
        if(error) {
            console.log(error);
            return;
        }
        
        console.warn({
            Cards: 'user cards',
            results
        });
        if(results.length > 0){
            res.json(results);
        }
        else{
            res.json(results);
        }
    })

})

module.exports = router;


