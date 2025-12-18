const fs = require("node:fs");
const https = require("node:https");
console.log("Hello World");
let a = 3456679;
let b = 12345;

fs.readFileSync("./file.txt" , "utf-16le");
console.log("Blocking");

fs.readFile("./file.txt", "utf-8", (data) => {
  console.log("This is file Reading Options....");
});

https.get("https://fakestoreapi.com/products", (res) => {
  console.log("Api Calling");
});

setTimeout(() => {
  console.log("Call Me After 3 Seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

let c = multiplyFn(a, b);

console.log("Multiplication of A and B :" + c );

