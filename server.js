const express = require("express");

// requires das routes
const routerInicio = require('./routes/routerInicio')
const routerLogin = require('./routes/routerLogin')
const routerAdmin = require('./routes/routerAdmin');

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

// rotas 
app.use("/", routerInicio);
app.use("/login", routerLogin);
app.use("/admin", routerAdmin);

app.listen(5000, function() {
    console.log("servidor iniciado!");
})