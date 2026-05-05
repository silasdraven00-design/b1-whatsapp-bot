# 🚀 GUIA RÁPIDO - COLOCAR NO AR EM 30 MINUTOS

## ✅ CHECKLIST COMPLETO

### FASE 1: PREPARAÇÃO (5 min)

- [ ] Node.js instalado? (rode `node -v` - precisa 18+)
- [ ] Git instalado? (rode `git -v`)
- [ ] Conta GitHub criada?

### FASE 2: CRIAR CONTA CLAUDE API (5 min)

- [ ] Acesse: https://console.anthropic.com
- [ ] Crie conta (email + senha)
- [ ] Clique em **Settings** (canto superior direito)
- [ ] Clique em **API Keys**
- [ ] Clique em **Create Key**
- [ ] Copie a chave: `sk-ant-api03-xxxxxxxxxxxxx`
- [ ] Adicione crédito (mínimo $5 pra testar) em **Billing**

**💰 Custo:** $5 dá pra ~1500 conversas

### FASE 3: CRIAR CONTA 360DIALOG (10 min)

- [ ] Acesse: https://hub.360dialog.com
- [ ] Crie conta
- [ ] Verifique email
- [ ] Clique em **Connect Channel** → **WhatsApp**
- [ ] Siga wizard (vai pedir pra escanear QR Code no WhatsApp Business)
- [ ] Copie **API Key** (na dashboard depois de conectar)
- [ ] Copie **Phone Number ID** (número que conectou)

**💰 Custo:** €25/mês (conversas ilimitadas)

### FASE 4: SETUP CÓDIGO LOCAL (5 min)

```bash
# Clone ou baixe o código
cd b1-whatsapp-bot

# Instale dependências
npm install

# Copie exemplo de config
cp .env.example .env

# Edite .env
nano .env
```

**Cole suas credenciais no .env:**

```env
WHATSAPP_TOKEN=sua_api_key_360dialog_aqui
WHATSAPP_PHONE_ID=id_do_numero_aqui
VERIFY_TOKEN=b1tintas_webhook_2025
CLAUDE_API_KEY=sk-ant-api03-xxxxx
PORT=3000
```

**Salve:** CTRL+O, Enter, CTRL+X

### FASE 5: TESTAR LOCALMENTE (2 min)

```bash
# Rode servidor
npm run dev

# Em outro terminal, teste
node test.js
```

✅ Se aparecer "Mensagem enviada com sucesso!" → tá funcionando!

### FASE 6: DEPLOY RAILWAY (5 min)

- [ ] Acesse: https://railway.app
- [ ] Login com GitHub
- [ ] Clique em **New Project** → **Deploy from GitHub repo**
- [ ] Selecione repositório `b1-whatsapp-bot`
- [ ] Clique em **Deploy**
- [ ] Vai em **Variables** → **Add variables**
- [ ] Adicione TODAS as variáveis do .env:

```
WHATSAPP_TOKEN=xxxxx
WHATSAPP_PHONE_ID=xxxxx
VERIFY_TOKEN=b1tintas_webhook_2025
CLAUDE_API_KEY=sk-ant-api03-xxxxx
```

- [ ] Clique em **Settings** → **Generate Domain**
- [ ] Copie a URL: `https://seuapp.up.railway.app`

### FASE 7: CONFIGURAR WEBHOOK 360DIALOG (3 min)

- [ ] Volte pra dashboard 360dialog
- [ ] Clique em **Configuration** → **Webhooks**
- [ ] Em **Webhook URL**, cole: `https://seuapp.up.railway.app/webhook`
- [ ] Em **Verify Token**, cole: `b1tintas_webhook_2025`
- [ ] Marque checkbox **messages**
- [ ] Clique em **Save**

✅ Vai aparecer "Webhook verified successfully!"

---

## 🎉 PRONTO! TESTE AGORA

1. Pegue seu celular
2. Mande mensagem pro número WhatsApp Business que você conectou
3. Escreva: "Olá, preciso de tinta"
4. **BOT VAI RESPONDER AUTOMATICAMENTE!** 🤖

---

## 🐛 RESOLVENDO PROBLEMAS

### "Webhook verification failed"

❌ Problema: Token não bate
✅ Solução: Confirme que `VERIFY_TOKEN` no Railway = token no 360dialog

### "Bot não responde"

❌ Problema: Servidor offline ou URL errada
✅ Solução:
1. Acesse `https://seuapp.up.railway.app/` no navegador
2. Deve aparecer `{"status":"online"}`
3. Se não aparecer → veja logs no Railway

### "Invalid API Key" (Claude)

❌ Problema: Chave Claude errada ou sem crédito
✅ Solução:
1. Confirme chave em https://console.anthropic.com/settings/keys
2. Verifique crédito em Billing
3. Gere nova chave se necessário

### "WhatsApp token invalid"

❌ Problema: Token 360dialog expirou
✅ Solução:
1. Gere novo token no 360dialog
2. Atualize `WHATSAPP_TOKEN` no Railway
3. Reinicie deploy

---

## 📊 MONITORAR CONVERSAS

### Ver logs em tempo real:

Railway → Deployments → View Logs

Você vai ver:
```
📨 Mensagem recebida de 5571999999999: Olá, preciso de tinta
✅ Resposta enviada para 5571999999999
```

---

## 💡 DICAS PRO

### Personalizar respostas:

Edite o arquivo `server.js`, procure por `B1_CONTEXT` e modifique:
- Adicione mais produtos
- Ajuste tom de voz
- Inclua promoções

### Adicionar mais funcionalidades:

- Enviar imagens de produtos
- Gerar PDF de orçamento
- Integrar com sistema de estoque
- Dashboard web de analytics

Me chama que te ajudo!

---

**BOA SORTE! 🚀**
