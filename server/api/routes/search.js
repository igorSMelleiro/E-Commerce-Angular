const connection = require('../../database-connection');
const tokenManager = require('../../token-generator');
const exprres = require('express');
const router  = exprres.Router();
const mysql = require('mysql');



//*File Stream for image seach and upload in directory
const fs = require('fs');
const path = require('path');

// router.get('/default',(req,res) => {
//     query = [
//         "SELECT * FROM v_search_res_prods ;"
//     ]
//     insert_search = '';
//     connection.query(query[0], (error,results,fields)=> {
//         if(error){
//             console.log(error);
//         }

//         //* transform image_url in an array of urlString
//         if(!results.length > 0){
//             console.log(results);
//             return;
//         }

//         let image_url_list = [];
//         // //!for each results loop thru images_url
        
//         let allResults = [];
//         for(let r = 0 ; r < results.length; r++){
//             let image_files = [];
//             image_url_list[r] = results[r].image_url.toString().split(',');
//             for(let i = 0 ; i < image_url_list[r].length; i++){
//                 if(fs.existsSync(image_url_list[r[i]])){
//                     image_files[r] = fs.readFileSync(image_url_list[r[i]],'base64');
//                 }
//             }
//             allResults[r] = {
//                 prod_id : results[r].prod_id,
//                 prod_title : results[r].prod_title,
//                 prod_stockAmount : results[r].prod_stockAmount,
//                 prod_price : results[r].prod_price,
//                 prod_discount : results[r].prod_discount,
//                 prod_shippingfee : results[r].prod_shippingfee,
//                 image_url : image_files,
//                 usr_name: results[r].usr_name,
//                 store_name : results[r].store_name,
//                 store_phone : results[r].store_phone,
//                 store_cellphone : results[r].store_cellphone,
//             }
//         }
//         res.json(allResults);
//     })
// });







router.post('/',(req,res)=>{

    console.log(req.body);
    let query = `SELECT * FROM v_search_res_prods;`;
    if(req.body.categ != null){
         query = `SELECT * FROM v_search_res_prods WHERE prod_categ = ${req.body.categ};`;
    }
    
    
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
            //takes the first 3 elements from the array
            if(image_url_list.length > 3){
                image_url_list[r] = image_url_list[r].slice(0,3);
            }
            console.log(image_url_list[r]);
            //*returns the max of 3 url  
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
})

module.exports = router;

