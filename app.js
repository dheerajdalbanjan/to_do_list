const express = require('express');
const bodyparser = require("body-parser");
const app = express();
app.set("view engine" , "ejs")
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));
var items = [];
app.get("/" , (req, res)=>{
    var date = new Date();
    let day = "";
    var options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    }
    day = date.toLocaleDateString("en-US" , options);
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