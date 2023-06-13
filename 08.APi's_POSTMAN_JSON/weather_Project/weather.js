
const express = require('express');

// extracting module 'https' for requesting api's

const https = require('https');

const app = express();

app.get("/", function (req, res) {
    


    const cityName="Bali";
    const appId="17b345a0fccfdba47ca5b236617935ed";
    const unit="metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName+"&appId="+ appId + "&units="+unit;
    https.get(url, function (response) {
        
        // 1.
        // console.log(response);
        // 2.
        // console.log(response.statusCode);
        // 3. response.on()   "on method"
        response.on("data",function(data){
            // console.log(data); 
            
            // but this data is in hexadecimal so to change into text we use JSON.parse() method
            
            const parse=JSON.parse(data);
            // console.log(parse);

            // to change back to hexadecimal we use JSON.stringify() method
            // const stringify=JSON.stringify(parse);
            // console.log(stringify);
            
            // now printing specific data from parse data
            
            const specificData= parse.main.feels_like;
            // console.log(specificData);

            const temp=parse.main.temp;
            // console.log(temp);
            
            const weatherPath=parse.weather[0].description;
            // console.log(weatherPath);
            
            // printing external server data in our client console screen
            // so, we will be using response i.e the top get function parameter which is "res"
            
            // sending response with heading 1
            // res.send("<h1>the temperature is "+ temp + " degree Celcius</h1>");

            // sending weather description along with the above response
            // res.send("<h1>the temperature is "+ temp + " degree Celcius</h1>"+"\nweather description is "+ weatherPath);

                                // or

            res.write("<h1>the temperature is "+ temp + " degree Celcius</h1>");
            res.write("<p>weather description is "+ weatherPath+ "</p>");
            // res.send();


            // now extracting image from external server

            const icon=parse.weather[0].icon; //copied from json viewer pro
            // console.log(icon); 

            const imageURL="https://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<img src="+imageURL+">");
            res.send();

                                
            
        })
        // res.send("helo");      //this will comment out bcoz only one res can be send in a request
    });
});

app.listen(3000, function () {
    console.log("server has started at port 3000");
});