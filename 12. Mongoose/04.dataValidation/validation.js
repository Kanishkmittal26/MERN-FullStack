const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });


//  adding validation here
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true,'no name']
    },
    rating: {
        type: Number,
        min:[1,'too few'],
        max:[10,'too Many']
    },
    review: String
});

const fruitModel = mongoose.model('fruits', fruitSchema);

const fruitOne = new fruitModel({
    name: "Apple",
    rating: 11,
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
    rating: 0,
    review: "Its sour in taste but must eat"
})

const fruitThree = new fruitModel({
    name: "Orange",
    rating: -1,
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

const fruitFour= new fruitModel({
    rating: 4,
    review: "yummy"
})

// fruitFour.save();

