import db from '../dataBase/db.js'
import { readFile } from 'fs/promises'

const __dirname = process.cwd()

const ErrorBody = {
    isError: true,
    error: "Server error",
    messege: "ошибка на сервере, попробуйте перезагрузить страницу"
}

export async function getCountryCode(res) {
    try {
        const data = await readFile(`${__dirname}/server/countryCodeData/data.json`, { encoding: 'utf8' })
        res.json(JSON.parse(data))
    }
    catch (err) {
        console.log(err)
    }
}

export async function addPhone(req, res) {
    try {
        const { phone, date } = req
        const phones = await db.query(`INSERT INTO phones (phone, adddate) values ($1, $2) RETURNING *`, [phone, date])
        res.json(phones.rows[0])
    } catch (err) {
        console.log(err)
        res.json(ErrorBody)
    }
}

export async function getPhones(res) {
    try {
        const dataFromDb = await db.query(`SELECT * FROM phones;`)
        res.json(dataFromDb.rows)
    } catch (err) {
        console.log(err)
        res.json(ErrorBody)
    }
}

export async function deletePhone(res, id) {
    try {
        const phones = await db.query('DELETE FROM phones where id = $1', [id])
        res.json(phones.rows[0])
    } catch (err) {
        console.log(err)
        res.json(ErrorBody)
    }
}