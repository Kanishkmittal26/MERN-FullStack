const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

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

const peopleSchema = mongoose.Schema({
    name: String,
    age: Number,
    // adding relation of fruit to people schema
    favouriteFruit: fruitSchema
});

const peopleModel = mongoose.model('peopleDeets', peopleSchema);

const fruit= new fruitModel({
    name: "Peach",
    rating: 2,
    review: "pink in color"
});

// fruit.save();

const people = new peopleModel({
    name: "Ema",
    age: 12,
    favouriteFruit: fruit
});

// people.save();

const fruit2= new fruitModel({
    name: "Mango",
    rating: 9,
    review: "Its sweet"
})

peopleModel.updateOne({name:"Kanishk Mittal"},{favouriteFruit: fruit2})
.then(data=>{
    mongoose.connection.close();
})
.catch(err=>{
    console.log(err);
});
