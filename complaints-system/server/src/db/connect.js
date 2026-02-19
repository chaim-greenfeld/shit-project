import { MongoClient } from "mongodb";

import dotenv from "dotenv"
dotenv.config()

const MONGO_URL = process.env.MONGO_URL

let client;

export async function connectToDB() {
  try {
    client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log('mongo connected')
    return client;
  } catch (err) {
    console.log(err.message);
    client = null;
  }
}

export async function getMongoConnection(){
    if(!client) await connectToDB();
    return client;
}



