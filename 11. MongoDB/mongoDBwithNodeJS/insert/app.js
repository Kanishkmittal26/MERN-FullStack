const  MongoClient= require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';

const client= new MongoClient(uri);

async function run(){

    try{
        const dbName = 'kanishk';
        const database = client.db(dbName);
        const collectionName= database.collection('product');
        const data={
            _id: 7,
            name: "wrapping-papers",
            price: 4,
            stock: 50 
        }
        const insertedData= await collectionName.insertOne(data);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    }finally{
        await client.close();
    }
}

run().catch(console.dir);