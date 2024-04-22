const {MongoClient}=require('mongodb');
const {connect}=require('mongoose');
const uri ='mongodb://localhost:27017';
const client=new MongoClient(uri);
async function connectToMongoDB(){
    try{
        await client.connect();
        console.log('connected to MongoDB');
    } catch(error){
        console.error("Error connecting to MongoDB: ",error);
    }
}
connectToMongoDB();