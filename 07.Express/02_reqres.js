const express = require ( 'express' );

const app=express();

// app requesting and checking the path and accordingly sending back the response on he host....now
// question arises where our application is hosting in a server 

app.get("/" , function(a,b){
    console.log(a);


    b.send("Hello <h1>Hi</h1>");
});


// dedicating a server host for the application

app.listen(3000, function(){
    console.log("server started on port 3000");
});

