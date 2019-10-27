const SHA256 = require("crypto-js/sha256");

const message = "i";
const convert = SHA256(message).toString()

// console.log(`Message ${message}`)
console.log(`Convert ${convert}`)

