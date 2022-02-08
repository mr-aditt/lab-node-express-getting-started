const express = require("express");
const bodyParser=require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res)=>{
	var num1=Number(req.body.first_num);
	var num2=Number(req.body.second_num);
	var result=num1+num2;
    res.send("The result: "+result);
});


app.listen(3000, ()=>console.log("Server started at port 3000"))