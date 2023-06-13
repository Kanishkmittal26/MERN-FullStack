const mongoose = require ( 'mongoose' );

// while connecting to server add /DataBase name as well
mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser: true});

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

// fruitModel.updateOne({_id:"646a8fc8021fcb8833725715"}, {name: "hello"})
//   .then(result => {
//     mongoose.connection.close()
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

  fruitModel.deleteOne({_id:"646a8fc8021fcb8833725715"}).then(result => {
    mongoose.connection.close()
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });