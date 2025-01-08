const express = require("express");
const expressEjsLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("layout", "./layout");

app.use(express.static("public"));
app.use(expressEjsLayout);

app.use("/", routerInicio);


app.listen(5000, function() {
    console.log("servidor iniciado!");
})