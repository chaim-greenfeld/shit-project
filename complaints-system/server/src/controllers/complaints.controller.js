



import { saveComplaintToDB, getAllComplaintsFromDB } from "../services/complaints.service.js";





export const createComplaints = async (req, res) => {
  try {
    const { category, message } = req.body;

    if (!category || !message) {
      return res
        .status(400)
        .json({ error: "Category and message are required" });
    }

    const createdAt = Date.now();

    await saveComplaintToDB({category, message, createdAt})
    res.status(201).json({message:"created Complaint" ,data: {category, message, createdAt}})
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getAllComplaints = async (req, res) => {
  const all = await getAllComplaintsFromDB()
  res.json(all)
}