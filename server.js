const express = require("express");
var app = express();
const bp = require("body-parser");
app.use(bp.json());
app.use(express.static(__dirname + "/manager/dist/manager"));
const route = require("./routes")(app);
app.listen(8000, function () {
    console.log("listening on port 8000");
});