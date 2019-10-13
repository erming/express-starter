const express = require("express");
const compression = require("compression");

let app = express();
let port = 8080;

app.use(compression());
app.use(express.static("public"));

app.listen(8080);

console.log("");
console.log("Listening to port " + port);
console.log("Ctrl-c to stop");
console.log("");
