# 📁 ESTRUTURA DO PROJETO

```
b1-whatsapp-bot/
│
├── 📄 server.js              # CÓDIGO PRINCIPAL DO BOT
│   ├── Webhook WhatsApp (recebe mensagens)
│   ├── Integração Claude API
│   ├── Contexto B1 Tintas
│   └── Envio de respostas
│
├── 📄 package.json           # Dependências Node.js
│   ├── express (servidor web)
│   ├── axios (chamadas HTTP)
│   └── nodemon (dev mode)
│
├── 📄 .env.example           # Template de configuração
│   ├── WHATSAPP_TOKEN
│   ├── WHATSAPP_PHONE_ID
│   ├── VERIFY_TOKEN
│   └── CLAUDE_API_KEY
│
├── 📄 .env                   # SUA CONFIGURAÇÃO (não commitar!)
│   └── Mesmo formato do .env.example
│
├── 📄 .gitignore             # Arquivos ignorados pelo Git
│   ├── node_modules/
│   ├── .env
│   └── logs/
│
├── 🧪 test.js                # Script de teste local
│   └── Simula mensagem WhatsApp
│
├── 🔧 install.sh             # Instalação automática
│   ├── Verifica Node.js/npm
│   ├── Instala dependências
│   └── Configura .env
│
├── 📚 README.md              # DOCUMENTAÇÃO PRINCIPAL
│   ├── O que o bot faz
│   ├── Como instalar
│   ├── Como fazer deploy
│   └── Troubleshooting
│
├── 📖 GUIA-SETUP.md          # PASSO A PASSO COMPLETO
│   ├── Checklist 30 minutos
│   ├── Criar conta Claude
│   ├── Criar conta 360dialog
│   └── Deploy Railway
│
├── ❓ FAQ.md                 # PERGUNTAS FREQUENTES
│   ├── Dúvidas gerais
│   ├── Custos
│   ├── Técnico
│   └── Segurança
│
├── 🧪 EXEMPLOS-TESTE.md      # CASOS DE TESTE
│   ├── 11 cenários diferentes
│   ├── Checklist de qualidade
│   └── Como reportar bugs
│
├── 🗺️ ROADMAP.md             # PRÓXIMAS MELHORIAS
│   ├── Versão 1.1 a 3.0
│   ├── Funcionalidades futuras
│   └── Cronograma sugerido
│
└── 📁 ESTRUTURA.md           # ESTE ARQUIVO
    └── Mapa completo do projeto
```

---

## 🎯 ARQUIVOS POR FUNÇÃO

### 🚀 ESSENCIAIS (precisa pra rodar)

```
server.js       → Código do bot
package.json    → Dependências
.env            → Suas credenciais
```

### 📚 DOCUMENTAÇÃO (guias de uso)

```
README.md           → Começa aqui
GUIA-SETUP.md       → Passo a passo
FAQ.md              → Dúvidas comuns
EXEMPLOS-TESTE.md   → Como testar
ROADMAP.md          → Futuro
ESTRUTURA.md        → Este arquivo
```

### 🔧 AUXILIARES (facilitam setup)

```
.env.example    → Template de config
.gitignore      → Segurança Git
install.sh      → Setup automático
test.js         → Teste local
```

---

## 🔄 FLUXO DE DADOS

```
┌─────────────────┐
│  Cliente envia  │
│  mensagem no    │
│    WhatsApp     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  WhatsApp API   │
│  (360dialog)    │
└────────┬────────┘
         │
         ↓ POST /webhook
┌─────────────────┐
│   server.js     │
│  (seu servidor) │
└────────┬────────┘
         │
         ↓ Processa mensagem
┌─────────────────┐
│   Claude API    │
│  (Anthropic)    │
└────────┬────────┘
         │
         ↓ Retorna resposta
┌─────────────────┐
│   server.js     │
│ (formata texto) │
└────────┬────────┘
         │
         ↓ POST /messages
┌─────────────────┐
│  WhatsApp API   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Cliente recebe │
│    resposta     │
└─────────────────┘
```

---

## 🧩 MÓDULOS DO server.js

```javascript
server.js
│
├── CONFIG (linha 12-18)
│   └── Variáveis de ambiente
│
├── B1_CONTEXT (linha 24-98)
│   └── Contexto da B1 pro Claude
│
├── Webhook GET (linha 104-116)
│   └── Verificação WhatsApp
│
├── Webhook POST (linha 122-150)
│   └── Recebe mensagens
│
├── getClaudeResponse() (linha 156-186)
│   └── Chama Claude API
│
├── sendWhatsAppMessage() (linha 192-212)
│   └── Envia via WhatsApp
│
├── Health Check (linha 218-224)
│   └── Status do servidor
│
└── Server Start (linha 230-242)
    └── Inicia Express
```

---

## 📦 DEPENDÊNCIAS (package.json)

### Produção

```
express   → Servidor web
axios     → HTTP requests
```

### Desenvolvimento

```
nodemon   → Auto-restart
```

---

## 🌐 VARIÁVEIS DE AMBIENTE (.env)

```
WHATSAPP_TOKEN      → Autenticação WhatsApp API
WHATSAPP_PHONE_ID   → ID do número WhatsApp
VERIFY_TOKEN        → Segurança webhook
CLAUDE_API_KEY      → Autenticação Claude
PORT                → Porta do servidor (3000)
```

---

## 🔐 SEGURANÇA

### ✅ COMMITS SEGUROS

```bash
.gitignore bloqueia:
- .env (credenciais)
- node_modules/ (dependências)
- *.log (logs sensíveis)
```

### ✅ TOKENS SECRETOS

```bash
Nunca exponha:
- WHATSAPP_TOKEN
- CLAUDE_API_KEY
```

### ✅ HTTPS OBRIGATÓRIO

```bash
Railway/Render fornecem SSL automático
```

---

## 🚀 COMANDOS ÚTEIS

### Setup inicial

```bash
./install.sh        # Instalação automática
npm install         # Instalar dependências
cp .env.example .env # Criar config
```

### Desenvolvimento

```bash
npm run dev         # Modo dev (auto-reload)
node test.js        # Testar localmente
```

### Produção

```bash
npm start           # Rodar servidor
```

### Debug

```bash
node server.js      # Ver logs direto
```

---

## 📊 LOGS

### Formato

```
✅ Mensagem enviada para 5571999999999
📨 Mensagem recebida de 5571999999999: Olá
❌ Erro ao processar mensagem: [erro]
```

### Onde encontrar

**Local:** Terminal onde rodou `npm run dev`

**Railway:** Dashboard → Deployments → View Logs

**Render:** Dashboard → Logs

---

## 🔄 DEPLOY

### Local → Railway

```bash
1. Push código pro GitHub
2. Conecta Railway ao repo
3. Adiciona variáveis .env
4. Deploy automático!
```

### Atualizações

```bash
git add .
git commit -m "Atualização"
git push origin main
→ Railway redeploy automático
```

---

## 💡 DICAS

### Editar contexto B1

```javascript
// server.js, linha 24
const B1_CONTEXT = `
  Você é o assistente...
  [modifique aqui]
`;
```

### Adicionar produto

```javascript
// Dentro de B1_CONTEXT
## CATÁLOGO PRINCIPAL JOTUN
1. Jotashield Ultra
2. Novo Produto Aqui  ← adicione
```

### Mudar tom de voz

```javascript
## TOM DE VOZ
- Profissional mas acessível  ← ajuste aqui
```

---

## 📞 SUPORTE

**Arquivo relevante quebrou?**

Restaure do `.example`:
```bash
cp .env.example .env
```

**Código não funciona?**

Volte pro estado original:
```bash
git reset --hard HEAD
```

**Dúvida?**

Leia na ordem:
1. README.md
2. GUIA-SETUP.md
3. FAQ.md
4. Me chama!

---

**Última atualização:** Janeiro 2025
