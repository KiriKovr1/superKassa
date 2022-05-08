import { Router } from "express"; 
import { getPhones, addPhone, deletePhone } from "../controllers/phones.controller.js";

const router = new Router()
const __dirname = process.cwd()

router.get('/phones', (req, res) => {
    getPhones(res)
} )

router.post('/phones', (req, res) => {
    addPhone(req.body, res)
} )

router.delete('/phones/:id', (req, res) => {
    deletePhone(res, req.params.id) 
})

export default router