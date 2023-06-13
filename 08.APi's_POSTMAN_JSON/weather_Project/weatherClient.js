
const express = require('express');

// extracting module 'https' for requesting api's

const https = require('https');

// for using data that is posted from client side or user side

const bodyParser= require ( 'body-parser' );

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/weatherClient.html");
});

app.post("/",function(req,res){

    
    const cityName = req.body.cityName;
    const appId = "17b345a0fccfdba47ca5b236617935ed";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appId=" + appId + "&units=" + unit;
    https.get(url, function (response) {

        response.on("data", function (data) {
            const parse = JSON.parse(data);
            const specificData = parse.main.feels_like;
            const temp = parse.main.temp;
            const weatherPath = parse.weather[0].description;
            res.write("<h1>the temperature in "+ cityName + " is " + temp + " degree Celcius</h1>");
            res.write("<p>weather description is " + weatherPath + "</p>");
            const icon = parse.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });
});
app.listen(3000, function () {
    console.log("server has started at port 3000");
});