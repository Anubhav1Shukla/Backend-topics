const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
async function listDatabases(){
    try{
        await  client.connect();
        console.log('Connected to MongoDB');
        const db = client.db("mamtadb");
        const collection = db.collection("Student_Details");
        await collection.insertOne({name: "John", age: 30});
        console.log("Document inserted successfully.");
    }catch (error){
        console.log('Error connecting to MongoDB:',error);
    }finally{
        await client.close();

    }
}
listDatabases();