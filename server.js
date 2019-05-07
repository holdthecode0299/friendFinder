// Dependencies
var express = require("express");
var path = require("path");

// express ========
var app = express();
var PORT = process.argv.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

// ================
require("./routing/htmlRoutes")(app);
require("./routing//apiRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on Port" + PORT);
});

// ======================================


// ====================
