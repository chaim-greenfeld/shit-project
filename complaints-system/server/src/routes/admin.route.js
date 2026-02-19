import express from 'express'
import { adminLogin } from '../controllers/adminLogin.controller.js'
const router = express.Router()


router.post('/', adminLogin)


export default router;