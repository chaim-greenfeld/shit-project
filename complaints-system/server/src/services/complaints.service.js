import { getMongoConnection } from "../db/connect.js";

const DB_NAME = "complaint";
const COLLECTION_NAME = "complaints"

const client = await getMongoConnection();
const complaintsCollection = client.db(DB_NAME).collection(COLLECTION_NAME);






export const saveComplaintToDB = async (complaintData) => {
    
    const newComplaint = {
        ...complaintData
    };

    return await complaintsCollection.insertOne(newComplaint);
};


export const getAllComplaintsFromDB = async() => {
    const all = await complaintsCollection.find().toArray()
    return all
}