const express=require( 'express' );

const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({embedded:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/",function(req,res){
    var w=Number(req.body.weight);
    var h=Number(req.body.height);

    var result=w*h;

    res.send("the resuslt is"+result);
})

app.listen(3000,function(){
    console.log("app has started at port 3000");
})