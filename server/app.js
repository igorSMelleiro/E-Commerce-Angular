const express = require('express');// express framework 
const bodyparser = require ('body-parser'); //parser for requisitions 
const helmet = require('helmet'); //set of headers to prevent xss atack




//*log middleware 
const customFileRotator = require('./logs');
const morgan = require('morgan'); //middleware to log requisitions
const app = express();


//var dbConnection = require('./database-connection');
app.use(morgan('combined',));

// setup the logger
app.use(morgan('combined', { stream: customFileRotator }))


app.use(bodyparser.json({limit : '50mb'}));
//app.use(helmet());

//app.use(auth);

//captura informação adicional da fonte da requisitação e também o tipo de requisição.
app.use((req,res,next) => {
   
    res.header('Access-Control-Allow-Origin','http://localhost:4200'); //!allow access to the server from any origin 
    res.header('Access-Control-Allow-Headers', ' Accept, Origin, X-Requested-With, Content-Type, Authorization');
    //res.header('Content-Type','application/octet-stream');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({'message':'recebi'});
    }
    next();
});


//* -- PUBLIC ROUTES -- *// 
//? home page Route

//*search Route
prodSearch = require('./api/routes/search');
app.use('/search',prodSearch);


//* Product Page Route
prodPageRoute = require('./api/routes/product-page');
app.use('/prod-page',prodPageRoute);

//* Home Page Route
homePage = require('./api/routes/home-page');
app.use('/home-page',homePage);


//! -- PRIVATE ROUTES -- !//

//* Profile Route
profileRoute = require('./api/routes/profile');
app.use('/profile',profileRoute);

//*profile page datas
userProfilePage = require('./api/routes/user-profile-page');
app.use('/user-profile-page', userProfilePage);

//* Prod Reg
prodRegistrationRoute = require('./api/routes/product-registration');
app.use('/prodregistration',prodRegistrationRoute);

//* Shop finalization
shopFinalization = require('./api/routes/shop-finalization');
app.use('/shop',shopFinalization);




//! Error Handlers
app.use((req, res, next) => {
    const error =  new Error('Not Found What');
    res.status(404);
    console.log(error);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error);
    res.json({
        error : {
            personal:" Oh JESUS D;",
            message: error.message
        }
    });
});

module.exports = app;