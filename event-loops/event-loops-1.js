const fs = require("node:fs");
const a = 100;

setImmediate(() => console.log("Set Immediate"));
fs.readFile("./file2.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Time expired"), 0);

console.log("a = " + a);

console.log("last file exceeds");
