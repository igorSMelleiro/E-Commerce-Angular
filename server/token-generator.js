//* Autentication start
let jwt = require('jsonwebtoken');



const generateToken = ({
    usrId,
    usrName,
    usrEmail
}) => {
    let resultsPayload = {
        usr_id : usrId,
        usr_name : usrName,
        usr_email : usrEmail,
    }
    let signOp = 
    {
        algorithm: 'HS256',
        expiresIn: '15d',
        
    }
    let token = jwt.sign(resultsPayload,'secret',signOp);
    return token;
    
}
const verifyToken = (token) => {
    try {
        jwt.verify(token.toString(),'secret');
       
        return true
    } catch (error) {
        console.log(error);
       return  false;
    } 
    
    
}
const decodeToken = (token) => {
    try {
        return jwt.decode(token,'secret');
        
    } catch (error) {
        console.log(error);
        return null;
    }
}
module.exports = {generateToken,verifyToken,decodeToken};