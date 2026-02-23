import mariadb from 'mariadb';
import dotenv from 'dotenv';    

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  connectionLimit: 5
});

export async function query(sql: string, params?: any[]): Promise<any> {
    let connection; 
    try {
        connection = await pool.getConnection();
        const res = params ? await connection.query(sql, params) : await connection.query(sql);
        return res;
    } catch (error) {
        throw error;
    } finally {
        if (connection) connection.release();
    }
}


export async function close() {
    try {
        await pool.end();
    } catch (error) {
        console.error('Error closing the database connection:', error);
    }
}