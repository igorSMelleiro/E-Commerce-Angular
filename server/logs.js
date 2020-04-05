

//const winston = require('winston');
//*file system modeules start from nodejs 
const rfs = require('rotating-file-stream') //module to easy create a rotate file stream
const fs =  require ('fs'); // file system module
const path = require('path'); // path manipulator
//*file system modeules end from nodejs 


// //*Winston log Configuration start
// const logger = winston.createLogger({
//     level:'info',
//     format: winston.format.json();,
//     default: {service : 'user-service'},
//     transports: [

//     ]
// });

// //*Winston log Configuration end

//__dirname references the parent directory
//criates a file names log in the parent directory
var logDirectory = path.join(__dirname, 'log')
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
 
// create a rotating write stream
var accessLogStream = rfs('requisitions.log', {
    size :'10M', // rotate each 10Mb
    interval: '1d', // rotate daily
    path: logDirectory 
})


module.exports = accessLogStream;