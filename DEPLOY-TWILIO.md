# 🚀 DEPLOY B1 BOT - PASSO A PASSO TWILIO

## ✅ O QUE VOCÊ JÁ TEM:

- ✅ Claude API Key configurada
- ✅ Conta Twilio criada
- ✅ Conta GitHub: @silasdraven00-design
- ✅ Código pronto com dados da B1

---

## 📦 PASSO 1: CRIAR REPOSITÓRIO GITHUB (5 min)

### 1.1 Criar repo:

1. Acesse: **https://github.com/new**
2. Repository name: `b1-whatsapp-bot`
3. Description: `WhatsApp Bot com IA Claude para B1 Tintas`
4. **Public** (deixa marcado)
5. ✅ Initialize with README (marca essa opção)
6. Clique **"Create repository"**

### 1.2 Upload dos arquivos:

**Você tem 2 opções:**

**OPÇÃO A - Via interface web (MAIS FÁCIL):**

1. No repo criado, clique **"Add file"** → **"Upload files"**
2. Arraste os arquivos que te enviei:
   - server.js
   - package.json
   - .env.example
   - .gitignore
   - README.md
   - (todos os outros .md)
3. Commit message: "Initial commit - B1 Bot"
4. Clique **"Commit changes"**

**OPÇÃO B - Via Git (se souber usar):**

```bash
# Clone o repo
git clone https://github.com/silasdraven00-design/b1-whatsapp-bot.git
cd b1-whatsapp-bot

# Copie os arquivos pra pasta
# (cole os arquivos que te enviei)

# Commit e push
git add .
git commit -m "Initial commit - B1 Bot"
git push
```

---

## 🚂 PASSO 2: DEPLOY RAILWAY (10 min)

### 2.1 Conectar GitHub:

1. Acesse: **https://railway.app/new**
2. Clique **"Deploy from GitHub repo"**
3. Procure: `b1-whatsapp-bot`
4. Clique no repo

### 2.2 Railway vai detectar automaticamente:
- ✅ Node.js project
- ✅ package.json encontrado
- ✅ Inicia deploy

**Aguarde ~2 minutos** (Railway instala dependências)

### 2.3 Configurar variáveis de ambiente:

**IMPORTANTE:** Antes de continuar, precisa pegar credenciais Twilio!

---

## 🔑 PASSO 3: PEGAR CREDENCIAIS TWILIO (5 min)

### 3.1 Login Twilio:

1. Acesse: **https://console.twilio.com**
2. Login: silas.moreira@b1tintas.com.br
3. Senha: @Ondina4052357890

### 3.2 Copiar credenciais:

Na dashboard principal, você vai ver:

```
Account SID: ACxxxxxxxxxxxxxxxxx (copie isso)
Auth Token: [clique no ícone de olho para ver] (copie isso)
```

**Me passa esses 2 valores:**

```
TWILIO_ACCOUNT_SID: ACxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN: xxxxxxxxxxxxxxxxx
```

---

## ⚙️ PASSO 4: CONFIGURAR RAILWAY (5 min)

### 4.1 Adicionar variáveis:

No Railway, clique na aba **"Variables"**

Adicione essas 4 variáveis (clique "+ New Variable" para cada):

```
Nome: TWILIO_ACCOUNT_SID
Valor: ACxxxxxxxxxxxxxxxxx (que você copiou)

Nome: TWILIO_AUTH_TOKEN
Valor: xxxxxxxxxxxxxxxxx (que você copiou)

Nome: TWILIO_WHATSAPP_FROM
Valor: whatsapp:+5571991990423

Nome: CLAUDE_API_KEY
Valor: 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
```

### 4.2 Gerar domínio público:

1. Clique na aba **"Settings"**
2. Scroll até **"Domains"**
3. Clique **"Generate Domain"**
4. Vai aparecer algo tipo: `b1-whatsapp-bot-production.up.railway.app`

**COPIE ESSA URL!** Vamos precisar dela.

### 4.3 Redeploy (se necessário):

Se o deploy já terminou antes de você adicionar as variáveis:

1. Clique em **"Deployments"**
2. Clique nos 3 pontinhos do último deploy
3. Clique **"Redeploy"**

---

## 🔗 PASSO 5: CONFIGURAR WEBHOOK TWILIO (5 min)

### 5.1 Acessar Twilio Console:

1. Vai em: **https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn**
2. Ou: **Messaging** → **Try it out** → **Send a WhatsApp message**

### 5.2 Configurar Sandbox (TESTE):

**Por enquanto vamos usar o Sandbox (grátis) pra testar:**

1. Na página, você verá um QR Code
2. **Escaneie o QR Code** com seu WhatsApp
3. Vai abrir conversa com número Twilio
4. **ENVIE A MENSAGEM** que aparece na tela (tipo: "join [palavra]")

✅ Agora você tá conectado ao Sandbox!

### 5.3 Configurar Webhook:

1. Ainda no Twilio Console
2. Vai em: **Messaging** → **Settings** → **WhatsApp sandbox settings**
3. Em **"When a message comes in"**:
   - URL: `https://SUA-URL-RAILWAY.up.railway.app/webhook`
   - Método: **POST**
4. Clique **"Save"**

---

## 🧪 PASSO 6: TESTAR! (2 min)

### 6.1 Teste básico:

1. Abra WhatsApp
2. Mande mensagem pro número Twilio Sandbox
3. Digite: "Olá, preciso de tinta"

**SE TUDO DEU CERTO:**
- ✅ Bot vai responder automaticamente!
- ✅ Você vai ver logs no Railway

### 6.2 Ver logs Railway:

1. Railway → **Deployments**
2. Clique no deploy ativo
3. Clique **"View Logs"**
4. Você vai ver:
```
📨 Mensagem recebida de whatsapp:+5571981002541: Olá, preciso de tinta
✅ Resposta enviada para whatsapp:+5571981002541
```

---

## ✅ CHECKLIST FINAL:

- [ ] Repositório GitHub criado
- [ ] Código enviado pro GitHub
- [ ] Railway conectado ao repo
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio Railway gerado
- [ ] Webhook Twilio configurado
- [ ] QR Code escaneado (sandbox)
- [ ] **TESTE: Bot respondeu!** 🎉

---

## ⏭️ PRÓXIMO PASSO: NÚMERO OFICIAL

**Sandbox é pra teste.** Para produção real:

1. Você precisa **solicitar número oficial Twilio**
2. Processo leva 1-3 dias úteis
3. Custo: ~$1.50/mês + por mensagem

**Vou te ajudar com isso depois que testar o sandbox!**

---

## 🆘 SE DER PROBLEMA:

### Bot não responde:

1. Vê logs Railway (tem erro?)
2. Confere se variáveis estão corretas
3. Testa URL Railway: `https://sua-url.up.railway.app/`
   - Deve retornar: `{"status":"online"}`

### Erro "Invalid API Key":

- Confere se `CLAUDE_API_KEY` tá correto no Railway

### Erro Twilio:

- Confere se `TWILIO_ACCOUNT_SID` e `TWILIO_AUTH_TOKEN` tão corretos

---

**ME AVISA EM CADA ETAPA:**

1. "Criei o repo GitHub" ✅
2. "Fiz upload dos arquivos" ✅
3. "Conectei no Railway" ✅
4. "Peguei credenciais Twilio: ACxxxx..." ✅
5. "Configurei variáveis Railway" ✅
6. "Gerei domínio: https://xxxx.railway.app" ✅
7. "Configurei webhook Twilio" ✅
8. "TESTEI: BOT RESPONDEU!" 🎉

**Bora começar pelo Passo 1 (criar repo GitHub)?** 🚀
