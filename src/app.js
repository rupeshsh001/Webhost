const express=require("express");
const app =express();
const hbs=require("hbs")
const path=require("path")
const port = process.env.PORT || 8000

//path

const staticpath=path.join(__dirname,"../public")

//hbs engine
const templatePath=path.join(__dirname,"../templates/views")
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.static(staticpath));

const partialPath=path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialPath)

//routing
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/items",(req,res)=>{
    // res.send("<h1>this page is under maintencance</h1>")
    res.render("items")
})
app.get("/about",(req,res)=>{
    res.render("about")
})


app.get("*",(req,res)=>{
    res.render("404error")
})
app.listen(port,()=>console.log("listening"))