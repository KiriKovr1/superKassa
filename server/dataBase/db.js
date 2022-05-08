import pg from 'pg'
const {Pool} = pg

const pool = new Pool({
    user: 'postgres',
    password: 'nuta',
    host: 'localhost',
    port: 5432,
    database: 'phones'
})

export default pool