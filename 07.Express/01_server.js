const express =  require ( 'express' );

const app = express();

app.listen(3000 , function(){
    console.log( " server started on Port 3000 " );
});


// we will get error "Cannot get /" on browser