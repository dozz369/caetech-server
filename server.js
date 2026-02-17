const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const app = express();

// --- CONFIGURAÇÃO DE SEGURANÇA ---
// Limita cada IP a 50 requisições a cada 15 minutos para evitar abusos
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: "Muitos acessos detectados. Segurança Ybyra ativada."
});
app.use(limiter);

app.use(express.json());
app.use(express.static(__dirname));

// --- ROTAS ---

// Rota Principal: Entrega o site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota de Automação: Recebe dados das máquinas
app.post('/api/producao', (req, res) => {
    const { maquina_id, pecas } = req.body;
    console.log(`[YBYRA LOG] Máquina ${maquina_id} produziu ${pecas} unidades.`);
    
    res.status(200).json({ 
        status: "Sucesso", 
        empresa: "Ybyra Industrial",
        mensagem: "Dados integrados ao sistema." 
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`
    ====================================
    SISTEMA YBYRA INDUSTRIAL ATIVO
    Porta: ${port}
    Status: Monitorando Produção...
    ====================================
    `);
});

