import mariadb from 'mariadb';
    
const pool = mariadb.createPool({
  host: 'localhost',
    user: 'magnus',
    password: '1234',
    database: 'test',
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