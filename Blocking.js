const crypto = require("node:crypto");
console.log("Hello");

var a = 43565432;
var b = 123133;
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First Key is Executed");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (data) => {
  console.log("Second Key is Generated");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

let c = multiplyFn(a, b);

console.log("Multiplication of A and B :" + c);
