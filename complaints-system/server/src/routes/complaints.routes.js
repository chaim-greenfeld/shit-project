import express from 'express'
const router = express.Router();


import { createComplaints, getAllComplaints } from '../controllers/complaints.controller.js';
import { authMiddleware } from '../controllers/adminLogin.controller.js';

router.post('/', createComplaints)

router.get('/', authMiddleware, getAllComplaints)

export default router;