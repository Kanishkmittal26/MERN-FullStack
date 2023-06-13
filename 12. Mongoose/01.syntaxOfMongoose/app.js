const mongoose = require ( 'mongoose' );

// while connecting to server add /DataBase name as well
mongoose.connect('mongodb://localhost:27017/dbName',{useNewUrlParser: true});

const schemaName= new mongoose.Schema ({
    name : String
});

const modelName = mongoose.model('collectionName', schemaName);

const dataOne= new modelName({name: "Kanishk"});

dataOne.save();

