const os = require('os');
const path = require('path');
//const math= require('./math');
//const {add}= require('./math'); // le meme que const math= require('./math');
const {add,multiply,subtract,divide}= require('./math');

// console.log(os.type());
//console.log(os.uptime());
console.log(`the system ${os.uptime()} seconds`);
const currentOs={
name:os.type(),
release:os.release(),
totalmem:os.totalmem(),
freemem:os.freemem()};
console.log(currentOs);

//console.log(os.userInfo());
// console.log(os.version());
 //console.log(os.homedir());


 //console.log(__dirname );
 //console.log(__filename);

// console.log(path.dirname(__filename));//direction of the file
// console.log(path.basename(__filename));// the name and extension  of the file
// console.log(path.extname(__filename)); // the  extension of the file

// console.log(math.add(2,4));
// console.log(add(2,4));
// console.log(multiply(2,4));
// console.log(subtract(2,4));
// console.log(divide(2,4));