const express =require("express");
const app =express();


const port =9090;

app.set("view engine","ejs");
app.set("views", Path.join(__dirname, "/views"));

 app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});
app.get("/rolldice",(req,res)=>{
    res.render("rolldice.ejs");
});
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});