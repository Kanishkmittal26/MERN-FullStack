const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const fruitModel = mongoose.model('fruits', fruitSchema);

const fruitOne = new fruitModel({
    name: "Apple",
    rating: 5,
    review: "Its good for health, must eat daily."
});

// fruitOne.save();

// creating new collection with different Schema

const peopleSchema = mongoose.Schema({
    name: String,
    age: Number
});

const peopleModel = mongoose.model('peopleDeets', peopleSchema);

const peopleOne = new peopleModel({
    name: "Kanishk Mittal",
    age: 23
});

// peopleOne.save();


const fruitTwo = new fruitModel({
    name: "Kiwi",
    rating: 3,
    review: "Its sour in taste but must eat"
})

const fruitThree = new fruitModel({
    name: "Orange",
    rating: 4,
    review: "It is rich in Vitamin-C"
})

// to insert many 

// syntax= modelName(arr,function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("success");
//     }
// })

// fruitModel.insertMany([fruitTwo, fruitThree]);