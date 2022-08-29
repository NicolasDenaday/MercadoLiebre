const express= require("express");
const path= require("path");
const app= express();

app.use(express.static(path.join(__dirname,"public")));

app.listen(proces.env.PORT || 3000, ()=>{
    console.log("Servidor corriendo")
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname, "/views/login.html"))
});
