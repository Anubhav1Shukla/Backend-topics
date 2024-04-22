const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'myproject';

async function main() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to database');
        const db = client.db(dbName);
        const collection = db.collection('document');
        const result = await collection.insertMany([
            { name: 'Anubhav', age: 20 },
            { name: 'Abhay', age: 20 }
        ]);
        console.log(`${result.insertedCount} documents inserted`);
        const documents = await collection.find({}).toArray();
        console.log('Found the following documents:');
        console.dir(documents);
        const updateResult = await collection.updateOne({ name: 'Anubhav' }, { $set: { age: 31 } });
        console.log(`${updateResult.modifiedCount} documents updated`);
        const updateDocument = await collection.findOne({ name: 'Anubhav' });
        console.log('Updated document:');
        console.dir(updateDocument);
        const deleteResult = await collection.deleteOne({ name: 'Anubhav' });
        console.log(`${deleteResult.deletedCount} documents deleted`);
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
