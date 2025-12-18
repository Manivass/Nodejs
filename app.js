const {calcluteSum,calculateMultiply} = require("./Calculate")
const data = require("./data.json");
const utils = require("node:util");

console.log(data);

const a = 10 ; 
const b = 20 ;
calcluteSum(a,b);
calculateMultiply(a,b);