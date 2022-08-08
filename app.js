const express = require('express');
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
app.set("view engine" , "ejs")
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));
var items = [];
app.get("/" , (req, res)=>{
    const day = date.date() ; 
    res.render("list" , {day :day , newitem:items})
})


app.listen(process.env.PORT || 4000 , ()=>{
    console.log("The server is running at port 4000");
})
app.post("/" , (req , res)=>{
    var item = req.body.newitem ;
    items.push(item);
    res.redirect("/");
})