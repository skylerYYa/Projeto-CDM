const sql = require('mssql');

const config = {
    user: 'sa',
    password: '@itb123456',
    server: 'localhost\\SQLEXPRESS', // Verifique se o nome do servidor está correto
    database: 'CDM_INF2A',
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};

async function connectDB() {
    try {
        await sql.connect(config);
        console.log('Conexão com o banco de dados bem-sucedida!');
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
}

module.exports = { connectDB, sql };
