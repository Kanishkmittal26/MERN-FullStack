const express = require ( 'express');

// using body parser bcoz it allows us to pass the information that we have sent while posting. form HTML (post method)
// it also allows you to go to any of your routes you can tap into something called "request.body"
const bodyParser= require( 'body-parser' );

const app=express();
app.use(bodyParser.urlencoded({embedded: true}));

app.get("/", function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname+"/calculator.html");
});

app.post("/" , function(a,res){

    // var number1= a.body.num1;
    // var number2= a.body.num2;

    // var result=number1+ number2;

    // res.send("result"+result);


    // The above code worked fine but the value that is retrieved are in text form so

    var number1= Number(a.body.num1);
    var number2= Number(a.body.num2);

    var result=number1+ number2;

    res.send("result"+result);

});

app.listen(3000,function(){
    console.log("server has started on port 3000");
});