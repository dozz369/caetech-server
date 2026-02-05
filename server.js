const express = require('express');
const path = require('path');
const app = express();

// O Render define a porta automaticamente na variável process.env.PORT
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/producao', (req, res) => {
    console.log("Dados recebidos:", req.body);
    res.status(200).json({ status: "sucesso" });
});

// IMPORTANTE: Adicionamos o '0.0.0.0' para o Render conseguir localizar o serviço
app.listen(port, '0.0.0.0', () => {
    console.log(`Caetech Corp operando na porta ${port}`);
});

