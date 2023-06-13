const mongoose = require ( 'mongoose' );

// while connecting to server add /DataBase name as well
mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const fruitModel = mongoose.model('fruits', fruitSchema);

fruitModel.find().then((data)=>{
    // console.log(data);
    for(var i=0;i<data.length;i++){
        console.log(data[i].name);
    }
    mongoose.connection.close();
});

