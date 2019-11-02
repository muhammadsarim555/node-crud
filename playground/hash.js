const SHA256 = require("crypto-js/sha256");
const jwt = require('jsonwebtoken');

// const message = "i";
// const convert = SHA256(message).toString()

// console.log(`Message ${message}`)
// console.log(`Convert ${convert}`)


 const obj = {name: "sarim"};
 const token = jwt.sign(obj, "123321")
 const decode = jwt.verify(token, "123321")
 
 console.log(token)
 console.log("decode", decode)