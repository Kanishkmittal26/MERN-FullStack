module.exports.date=date;

function date(){

    var options ={
        weekday :"long",
    month : "long",
    day : "numeric",
}

var today = new Date();
var day = today.toLocaleDateString("en-US",options);

return day;
}

module.exports.day=day;


function day(){

    var options ={
        weekday :"long"
}

var today = new Date();
var day = today.toLocaleDateString("en-US",options);

return day;
}