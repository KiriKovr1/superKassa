import { Router } from "express";
import { getCountryCode } from "../controllers/phones.controller.js";

const router = new Router()

router.get('/countryCodes', async (req, res) => {
    getCountryCode(res)
})

export default router