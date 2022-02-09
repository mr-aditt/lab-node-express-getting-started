const express = require("express");
const bodyParser=require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res)=>{
	var num1=Number(req.body.first_num);
	var num2=Number(req.body.second_num);
	var result=num1+num2;
	res.render('result', {num_1:num1, num_2:num2, output: result});
    // res.send("The result: "+result);
});


app.listen(3000, ()=>console.log("Server started at port 3000"))