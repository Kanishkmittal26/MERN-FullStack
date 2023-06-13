const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27017';
// const dbName='fruitsDB';
const client = new MongoClient(uri);
const dbName = "kanishk";
const collectionName = "product";


async function run() {
    
    try {
        const database = client.db(dbName);
        const products = database.collection(collectionName);
        await client.connect();

        // find One
        const query = { _id: 7};
        const product = await products.findOne(query);
        console.log(product);
        

        // find Many
        const query2={_id:{$gt: 0}};
        const product2= await products.find(query2);
        for await(const i of product2){
            console.dir(i);
        }
    } 
    finally {
        await client.close();
    }
}
run().catch(console.dir);