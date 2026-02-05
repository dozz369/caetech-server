const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Para o servidor entender JSON

// ROTA 1: Receber dados do Sensor da Máquina de Costura
app.post('/api/producao', (req, res) => {
    const { maquina_id, quantidade, status } = req.body;
    
    console.log(`Dados Recebidos: Máquina ${maquina_id} produziu ${quantidade} unidades.`);
    
    // Aqui você conectaria com o Banco de Dados ou com o Make.com
    // Exemplo de resposta para o sensor:
    res.status(200).json({ message: "Dados registrados com sucesso na Caetech!" });
});

// ROTA 2: Página Inicial do Site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
    res.send('Servidor Caetech Corp Ativo e Operante.');
});

app.listen(port, () => {
    console.log(`Servidor Caetech rodando em http://localhost:${port}`);

});


