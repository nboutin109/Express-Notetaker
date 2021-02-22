const bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});  
