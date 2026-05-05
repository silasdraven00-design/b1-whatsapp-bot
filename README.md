# 🤖 B1 Tintas - WhatsApp Bot com IA Claude

Bot inteligente para atendimento automático via WhatsApp usando Claude AI.

## 📋 O QUE ELE FAZ

- ✅ Responde dúvidas sobre produtos Jotun
- ✅ Calcula rendimento de tinta automaticamente
- ✅ Explica diferenças entre produtos
- ✅ Gera orçamentos básicos
- ✅ Encaminha para vendedor quando necessário
- ✅ Atendimento 24/7 com contexto da B1 Tintas

---

## 🚀 SETUP RÁPIDO (3 passos)

### 1️⃣ Instalar Dependências

```bash
npm install
```

### 2️⃣ Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o `.env` e preencha:

```env
WHATSAPP_TOKEN=seu_token_360dialog_ou_twilio
WHATSAPP_PHONE_ID=id_do_seu_numero_whatsapp
VERIFY_TOKEN=b1tintas_webhook_2025
CLAUDE_API_KEY=sk-ant-api03-xxxxx
```

### 3️⃣ Rodar Localmente (teste)

```bash
npm run dev
```

Servidor estará em `http://localhost:3000`

---

## 🔑 COMO CONSEGUIR AS CREDENCIAIS

### A) WhatsApp Business API Token

**OPÇÃO 1: 360dialog (Recomendado - Mais Barato)**

1. Acesse: https://hub.360dialog.com
2. Crie conta
3. Conecte número WhatsApp Business
4. Copie o `API Key` → vai em `WHATSAPP_TOKEN`
5. Copie o `Phone Number ID` → vai em `WHATSAPP_PHONE_ID`

**OPÇÃO 2: Twilio**

1. Acesse: https://www.twilio.com/console
2. Crie conta
3. Configure WhatsApp Sender
4. Copie `Auth Token` e `Phone Number SID`

**OPÇÃO 3: Meta (Oficial)**

1. Acesse: https://business.facebook.com
2. Crie Business App
3. Adicione produto "WhatsApp"
4. Configure webhook
5. Copie token de acesso

---

### B) Claude API Key

1. Acesse: https://console.anthropic.com
2. Crie conta (ou faça login)
3. Vá em **Settings → API Keys**
4. Clique em **"Create Key"**
5. Copie a chave `sk-ant-api03-xxxxx`
6. Cole em `CLAUDE_API_KEY`

**Custo:** ~$0,003 por conversa (muito barato!)

---

## 🌐 DEPLOY EM PRODUÇÃO

### Railway (Recomendado - Mais Fácil)

1. Crie conta em https://railway.app
2. Conecte seu repositório GitHub
3. Configure variáveis de ambiente no painel
4. Deploy automático!
5. Copie a URL gerada (ex: `https://b1bot.up.railway.app`)

### Render

1. Crie conta em https://render.com
2. New → Web Service
3. Conecte repo
4. Configure env vars
5. Deploy!

### VPS Manual (DigitalOcean, Vultr, etc)

```bash
# No servidor
git clone seu-repo
cd b1-whatsapp-bot
npm install
npm install -g pm2

# Criar .env com suas credenciais
nano .env

# Iniciar com PM2
pm2 start server.js --name b1-bot
pm2 save
pm2 startup
```

---

## ⚙️ CONFIGURAR WEBHOOK NO WHATSAPP

Depois de fazer deploy, você terá uma URL tipo:
`https://seuapp.railway.app/webhook`

**No painel do 360dialog/Twilio/Meta:**

1. Vá em **Webhooks**
2. Adicione a URL: `https://seuapp.railway.app/webhook`
3. Verify Token: `b1tintas_webhook_2025` (mesmo do .env)
4. Subscribe to: `messages`
5. Salvar

**Teste:**
- Mande mensagem pro número WhatsApp Business
- Bot deve responder automaticamente!

---

## 🧪 TESTAR LOCALMENTE (antes de deploy)

### Método 1: ngrok (Túnel público temporário)

```bash
# Instale ngrok
npm install -g ngrok

# Rode o servidor local
npm run dev

# Em outro terminal, crie túnel
ngrok http 3000

# Copie a URL gerada (ex: https://abc123.ngrok.io/webhook)
# Configure essa URL no painel WhatsApp
```

### Método 2: Usar Postman

```bash
# POST para http://localhost:3000/webhook
# Body (JSON):
{
  "entry": [{
    "changes": [{
      "value": {
        "messages": [{
          "from": "5571999999999",
          "type": "text",
          "text": {
            "body": "Olá, preciso de tinta"
          }
        }]
      }
    }]
  }]
}
```

---

## 📊 MONITORAMENTO

### Logs em Produção

```bash
# Railway: acesse o painel → Deployments → View Logs

# PM2 (VPS):
pm2 logs b1-bot
pm2 monit
```

### Health Check

Acesse: `https://seuapp.railway.app/`

Deve retornar:
```json
{
  "status": "online",
  "service": "B1 Tintas WhatsApp Bot",
  "version": "1.0.0"
}
```

---

## 🎯 PRÓXIMOS PASSOS (Melhorias Futuras)

- [ ] Adicionar histórico de conversas (banco de dados)
- [ ] Sistema de filas para múltiplas conversas simultâneas
- [ ] Dashboard web para monitorar conversas
- [ ] Integração com sistema de estoque (pra informar disponibilidade real)
- [ ] Envio de imagens de produtos
- [ ] Geração de orçamento em PDF
- [ ] Multi-agente (passar pra vendedor humano quando necessário)

---

## 💰 CUSTOS MENSAIS ESTIMADOS

| Serviço | Custo | Notas |
|---------|-------|-------|
| 360dialog | €25/mês | ~R$ 140 (conversas ilimitadas) |
| Claude API | ~R$ 50 | 500-1000 conversas/mês |
| Railway | $5/mês | ~R$ 28 (ou grátis tier) |
| **TOTAL** | **~R$ 220/mês** | Escala conforme uso |

---

## 🛠️ TROUBLESHOOTING

### Bot não responde

1. Verifique logs: `pm2 logs` ou painel Railway
2. Confirme webhook configurado corretamente
3. Teste health check: `curl https://seuapp.railway.app/`
4. Verifique se WHATSAPP_TOKEN está correto

### Erro "Invalid API Key" (Claude)

1. Gere nova chave em https://console.anthropic.com
2. Atualize `CLAUDE_API_KEY` no .env
3. Reinicie servidor

### Webhook verification failed

1. Confirme `VERIFY_TOKEN` no .env = token no painel WhatsApp
2. URL deve ser HTTPS (não HTTP)
3. Aguarde 30s após deploy antes de configurar webhook

---

## 📞 SUPORTE

Problemas? Me manda mensagem com:
- Logs do erro
- Printscreen da configuração
- Provider usado (360dialog/Twilio/Meta)

---

## 📄 LICENÇA

MIT - Livre para usar e modificar

---

**Desenvolvido por Silas para B1 Tintas** 🎨
