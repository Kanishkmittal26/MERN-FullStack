const express = require ( 'express' );
const bodyparser = require ( 'body-parser' );

const date= require(__dirname+'/date.js');



const app=express();

//using ejs module
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));


app.use(express.static("public"));


var listNewItem=["Buy Food","Buy Burger","Make Pancakes"];
let workItems=[];


app.get("/", function(req,res){

    // Practice 1



    // var currentDate = new Date();
    // var currentDay= currentDate.getDay();
    // var day="";

    // switch(currentDay){
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    // }
    // res.render('lists', {listTitle : day});


    var day=date.day();

    res.render('lists',{ listTitle : day , newItemHTML : listNewItem });
    
});

app.post("/", function(req,res){

    var items=req.body.newItem;
    if(req.body.list =="Work"){
        workItems.push(items);
        res.redirect("/work");
    }
    else{
        listNewItem.push(items);
        res.redirect("/");
    }
})

app.get("/work", function(req,res){
    res.render('lists',{listTitle : "Work List", newItemHTML:workItems});
});

app.post("/work",function(req,res){
    let item=req.bodyparser.newitem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about",function(req,res){
    res.render('about');
});

app.listen(process.env.PORT || 3000, function(){
    console.log("server has started");
});
