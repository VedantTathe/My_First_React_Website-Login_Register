const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const path = require("path");
const hbs = require("hbs");
const Register = require("./models/register");
const mongoose= require("mongoose");
require("./db/conn");
const ec = path.join(__dirname, "../.env");
require("dotenv").config({path: ec});


const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use('/css',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// console.log(static_path);
// console.log(template_path);
// console.log(partials_path);

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res)=>{
    res.render("register");
});

app.get("/login", (req, res)=>{
    res.render("login");
});

app.get("/register", (req, res)=>{
    res.render("register");
});


app.post("/register", async (req, res)=>{
    try{
        console.log(req.body.firstname);
        console.log(req.body.lastname);
        console.log(req.body.email);
        console.log(req.body.pswd);

             const Registerschema = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                pswd: req.body.pswd
            })
            const registered = await Registerschema.save()
            res.status(201).render("index");

        
        
    }
    catch(error)
    {
        res.status(400).send("error");
    
        console.log(error);
    }
    
    

});

app.post("/login", async (req, res)=>{

    try{
        const email = req.body.email;
        const pswd = req.body.pswd;
        const user = await Register.findOne({email:email});

        // console.log(user.email);
        // console.log(email);
        // console.log("try");
        
        if(user.email == email)
        {
            if(user.pswd == pswd)
            {
                res.status(201).render("index");
                // res.send("<h1>Login Successfull..!</h1>");
            }
            else{
                res.send("<h1>Please Check your Password..!</h1>");
            }
        }
        else{
            res.send("<h1>please Register..!</h1>");
            // res.render("register");
        }
    
    }catch(error)
    {

        res.send("<h1>Account not found..!</h1></br><h1>Please Register First</h1>");
    }
});


app.listen(port, ()=>{
    console.log(`Server is running at port no. ${port}`);
});
