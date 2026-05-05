const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Twilio envia form-urlencoded

// ============================================
// CONFIGURAÇÕES - VOCÊ VAI PREENCHER NO RAILWAY
// ============================================
const CONFIG = {
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || 'seu_account_sid',
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || 'seu_auth_token',
  TWILIO_WHATSAPP_FROM: process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+5571991990423',
  CLAUDE_API_KEY: process.env.CLAUDE_API_KEY || 'sk-ant-api03-xxxxx',
  PORT: process.env.PORT || 3000
};

// ============================================
// CONTEXTO B1 TINTAS PARA CLAUDE
// ============================================
const B1_CONTEXT = `Você é o assistente virtual da B1 Tintas, distribuidora oficial Jotun em Salvador-BA.

## INFORMAÇÕES DA EMPRESA
- Nome: B1 Tintas
- Distribuidora oficial: Jotun
- Endereço: Via Urbana, Vila CIA Sul, 2199, Simões Filho - BA, 43721-450
- Telefone comercial: (71) 91990-423
- WhatsApp: (71) 91990-423
- Horário: Segunda a Sexta 08:00h às 17:00h, Sábado fechado

## CATÁLOGO PRINCIPAL JOTUN
1. Jotashield Ultra (Fachada Premium)
2. Jotashield Antimofo (Fachada Alto Padrão)
3. Jotun Maxi (Fachada Econômica)
4. Fenomastic Pure Colours (Interno Premium)
5. Fenomastic Emulsions (Interno Padrão)
6. Lady Pure Color (Interno Alta Durabilidade)
7. Jotatemp 1000 (Alta Temperatura até 600°C)
8. Jotamastic (Epóxi Industrial)
9. Hardtop (Poliuretano)

## CALCULADORA DE RENDIMENTO
- Jotashield: 8-10 m²/litro (2 demãos)
- Fenomastic: 10-12 m²/litro (2 demãos)  
- Lady: 10-12 m²/litro (2 demãos)
- Jotatemp: 6-8 m²/litro

Fórmula: (Área m² × 2 demãos) ÷ rendimento = litros necessários

## FICHAS TÉCNICAS DISPONÍVEIS
- TDS (Ficha Técnica)
- SDS (Segurança)
- AG (Aprovação Governo)

## SUA FUNÇÃO
1. Responder dúvidas sobre produtos Jotun
2. Calcular rendimento quando o cliente informar área
3. Explicar diferenças entre produtos
4. Informar disponibilidade
5. Gerar orçamento básico
6. Encaminhar para vendedor quando necessário

## TOM DE VOZ
- Profissional mas acessível
- Use emojis com moderação (🎨 ✅ 📊)
- Seja direto e objetivo
- Sempre pergunte se precisa de mais alguma coisa

## REGRAS IMPORTANTES
- NUNCA invente preços - diga "preciso consultar valores atualizados com nossa equipe"
- NUNCA prometa desconto - diga "nosso comercial pode avaliar condições especiais"
- Se não souber algo, seja honesto e ofereça contato com vendedor
- Sempre confirme endereço de entrega antes de orçamento
- Fora do horário comercial (Seg-Sex 8h-17h), informe: "Estamos fora do horário de atendimento. Retornaremos sua mensagem no próximo dia útil às 8h!"

## EXEMPLO DE CONVERSA
Cliente: "Preciso pintar uma casa de 200m²"
Você: "Ótimo! Para calcular corretamente, preciso saber:
- É parede interna ou externa (fachada)?
- Qual acabamento deseja (premium, padrão ou econômico)?
- Qual a cor aproximada?"

Cliente: "Externa, quero algo bom"
Você: "Perfeito! Para fachada recomendo:

🏆 **Jotashield Ultra** (Premium)
- Máxima durabilidade (10+ anos)
- Resistência superior ao mofo
- Rendimento: 8m²/litro

Para 200m² você precisaria de aproximadamente:
200m² × 2 demãos ÷ 8 = **50 litros**

Posso gerar um orçamento detalhado? Qual seu endereço para entrega?"`;

// ============================================
// WEBHOOK TWILIO - RECEBER MENSAGENS
// ============================================
app.post('/webhook', async (req, res) => {
  try {
    // Twilio envia dados como form-urlencoded
    const from = req.body.From; // Ex: whatsapp:+5571999999999
    const body = req.body.Body; // Texto da mensagem

    console.log(`📨 Mensagem recebida de ${from}: ${body}`);

    // Responde imediatamente ao Twilio (evita timeout)
    res.type('text/xml');
    res.send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');

    // Processa com Claude de forma assíncrona
    const response = await getClaudeResponse(body);
    
    // Envia resposta via Twilio
    await sendTwilioMessage(from, response);

    console.log(`✅ Resposta enviada para ${from}`);

  } catch (error) {
    console.error('❌ Erro ao processar mensagem:', error.message);
  }
});

// ============================================
// INTEGRAÇÃO COM CLAUDE API
// ============================================
async function getClaudeResponse(userMessage) {
  // Lista de modelos para tentar (incluindo Claude 4!)
  const modelsToTry = [
    // Claude 4 (mais recentes)
    'claude-opus-4-7',
    'claude-sonnet-4-7',
    'claude-opus-4-20250514',
    'claude-sonnet-4-20250514',
    'claude-haiku-4-20250514',
    // Claude 3.5
    'claude-3-5-sonnet-20241022',
    'claude-3-5-sonnet-20240620',
    // Claude 3
    'claude-3-opus-20240229',
    'claude-3-sonnet-20240229',
    'claude-3-haiku-20240307',
    // Claude 2 (legado)
    'claude-2.1',
    'claude-2.0',
    'claude-instant-1.2'
  ];
  
  for (const modelName of modelsToTry) {
    try {
      console.log(`🤖 Tentando modelo: ${modelName}`);
      
      const response = await axios.post(
        'https://api.anthropic.com/v1/messages',
        {
          model: modelName,
          max_tokens: 1024,
          system: B1_CONTEXT,
          messages: [
            {
              role: 'user',
              content: userMessage
            }
          ]
        },
        {
          headers: {
            'x-api-key': CONFIG.CLAUDE_API_KEY,
            'anthropic-version': '2023-06-01',
            'content-type': 'application/json'
          }
        }
      );

      console.log(`✅ SUCESSO com modelo: ${modelName}`);
      return response.data.content[0].text;

    } catch (error) {
      console.log(`❌ Falha com ${modelName}: ${error.response?.data?.error?.message || error.message}`);
      // Continua para próximo modelo
    }
  }
  
  // Se nenhum modelo funcionou
  console.error('❌ Nenhum modelo Claude funcionou!');
  return 'Desculpe, estou com dificuldades técnicas no momento. Por favor, entre em contato pelo telefone (71) 91990-423. 🙏';
}

// ============================================
// ENVIAR MENSAGEM VIA TWILIO
// ============================================
async function sendTwilioMessage(to, text) {
  try {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${CONFIG.TWILIO_ACCOUNT_SID}/Messages.json`;
    
    const params = new URLSearchParams();
    params.append('From', CONFIG.TWILIO_WHATSAPP_FROM);
    params.append('To', to);
    params.append('Body', text);

    await axios.post(url, params, {
      auth: {
        username: CONFIG.TWILIO_ACCOUNT_SID,
        password: CONFIG.TWILIO_AUTH_TOKEN
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

  } catch (error) {
    console.error('❌ Erro ao enviar mensagem Twilio:', error.response?.data || error.message);
    throw error;
  }
}

// ============================================
// HEALTH CHECK
// ============================================
app.get('/', (req, res) => {
  res.json({
    status: 'online',
    service: 'B1 Tintas WhatsApp Bot (Twilio)',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    contact: '(71) 91990-423'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    twilio: CONFIG.TWILIO_ACCOUNT_SID ? '✅ Configurado' : '❌ Faltando',
    claude: CONFIG.CLAUDE_API_KEY ? '✅ Configurado' : '❌ Faltando'
  });
});

// ============================================
// INICIAR SERVIDOR
// ============================================
app.listen(CONFIG.PORT, () => {
  console.log('🎨 B1 Tintas WhatsApp Bot (Twilio) iniciado!');
  console.log(`📡 Servidor rodando na porta ${CONFIG.PORT}`);
  console.log(`🔗 Webhook URL: http://localhost:${CONFIG.PORT}/webhook`);
  console.log('');
  console.log('⚙️  Configurações:');
  console.log(`   - Twilio Account SID: ${CONFIG.TWILIO_ACCOUNT_SID ? '✅ Configurado' : '❌ Faltando'}`);
  console.log(`   - Twilio Auth Token: ${CONFIG.TWILIO_AUTH_TOKEN ? '✅ Configurado' : '❌ Faltando'}`);
  console.log(`   - WhatsApp From: ${CONFIG.TWILIO_WHATSAPP_FROM}`);
  console.log(`   - Claude API Key: ${CONFIG.CLAUDE_API_KEY ? '✅ Configurado' : '❌ Faltando'}`);
  console.log('');
  console.log('📞 Contato B1 Tintas: (71) 91990-423');
  console.log('📍 Endereço: Via Urbana, 2199, Simões Filho-BA');
  console.log('⏰ Horário: Seg-Sex 08h-17h');
  console.log('');
});
