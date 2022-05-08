import db from '../dataBase/db.js'

export async function addPhone(req, res) {
    try{
        const { phone, date} = req
        const phones = await db.query(`INSERT INTO phones (phone, adddate) values ($1, $2) RETURNING *`, [phone, date] ) 
        res.json(phones.rows[0])
    }catch(err) {
        console.log(err)
    }
}

export async function getPhones(res) {
    try{
        const dataFromDb = await db.query(`SELECT * FROM phones;`)
        res.json( dataFromDb.rows)
    } catch (err) {
        console.log(err)
    }
}

export async function deletePhone(res, id) {
    const phones = await  db.query('DELETE FROM phones where id = $1', [id])
    res.json(phones.rows[0])
}