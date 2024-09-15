const express = require('express');
const { connectDB, sql } = require('./models/db');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/page1.html', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM cardapio`;
        console.log('Dados buscados:', result.recordset);
        res.json(result.recordset);
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        res.status(500).send('Erro ao buscar dados');
    }
});

app.post('/page1.html', async (req, res) => {
    const { data, alimento, nutriticao } = req.body;
    console.log('Dados recebidos:', req.body);

    try {
        await sql.query`INSERT INTO cardapio (data, alimento, nutriticao) VALUES (${data}, ${alimento}, ${nutriticao})`;
        res.status(201).send('Dados adicionados com sucesso');
    } catch (err) {
        console.error('Erro ao adicionar dados:', err);
        res.status(500).send('Erro ao adicionar dados');
    }
});

app.get('/page2.html', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM comentarios`;
        console.log('Comentários buscados:', result.recordset);
        res.json(result.recordset);
    } catch (err) {
        console.error('Erro ao buscar comentários:', err);
        res.status(500).send('Erro ao buscar comentários');
    }
});

app.post('/page2.html', async (req, res) => {
    const { aluno, comentario, avaliacao } = req.body;
    console.log('Comentário recebido:', req.body);

    try {
        await sql.query`INSERT INTO comentarios (aluno, comentario, avaliacao) VALUES (${aluno}, ${comentario}, ${avaliacao})`;
        res.status(201).send('Comentário adicionado com sucesso');
    } catch (err) {
        console.error('Erro ao adicionar comentário:', err);
        res.status(500).send('Erro ao adicionar comentário');
    }
});

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
});
