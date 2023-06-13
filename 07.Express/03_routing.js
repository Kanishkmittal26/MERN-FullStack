const express = require ( 'express' );

const app=express();

// app requesting and checking the path and accordingly sending back the response on he host....now
// question arises where our application is hosting in a server 

app.get("/" , function(a,b){
    console.log(a);


    b.send("Hello <h1>Hi</h1>");
});

// routing to another request as per user choice...suppose contact

app.get("/contact", function(req,res){
    res.send("ContactNo: kanishkmittal26@gmail.com");
});



// after installing nodemon making another request 

app.get("/about", function(req,res){
    res.send("Hi My name is Kanishk Mittal and I am 23 years old");
});
// dedicating a server host for the application

app.listen(3000, function(){
    console.log("server started on port 3000");
});

