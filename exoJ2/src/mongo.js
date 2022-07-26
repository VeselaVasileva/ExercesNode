import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/mongo-formation";
const db = new MongoClient(uri).connect();

export default db;
