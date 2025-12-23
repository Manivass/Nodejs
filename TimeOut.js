console.log("Hello World");

var a = 2345678;
var b = 123456;

setTimeout(() => {
  console.log("Call Me Immeadiately");
}, 0);

setTimeout(() => {
  console.log("Call Me After 3 Seconds");
}, 3000);

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

let c = multiplyFn(a, b);

console.log("Multiplication of A and B :" + c);
