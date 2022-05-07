import { Router } from "express";
import { readFile } from 'fs/promises'

const router = new Router()
const __dirname = process.cwd()

router.get('/countryCodes',  async (req, res) => {
    try{
        const data = await readFile(`${__dirname}/server/countryCodeData/data.json`, {encoding: 'utf8'})
        res.json(JSON.parse(data))
    } 
    catch(err) {
        console.log(err)
    }
})

export default router