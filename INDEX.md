# 🤖 B1 TINTAS - WHATSAPP BOT COM IA CLAUDE

> Sistema completo de atendimento automático via WhatsApp usando Inteligência Artificial

---

## 🎯 COMEÇAR AQUI

**Primeira vez?** Siga esta ordem:

1. 📖 **[README.md](README.md)** - Entenda o que o bot faz
2. 🚀 **[GUIA-SETUP.md](GUIA-SETUP.md)** - Coloque no ar em 30 minutos
3. 🧪 **[EXEMPLOS-TESTE.md](EXEMPLOS-TESTE.md)** - Teste o bot

---

## 📚 DOCUMENTAÇÃO COMPLETA

| Arquivo | O que é | Quando usar |
|---------|---------|-------------|
| **README.md** | Documentação principal | Primeira leitura |
| **GUIA-SETUP.md** | Passo a passo completo | Setup inicial |
| **FAQ.md** | Perguntas frequentes | Tirar dúvidas |
| **EXEMPLOS-TESTE.md** | Casos de teste | Validar funcionamento |
| **ROADMAP.md** | Melhorias futuras | Planejar próximas versões |
| **ESTRUTURA.md** | Arquitetura do projeto | Entender código |

---

## ⚡ INÍCIO RÁPIDO (3 comandos)

```bash
# 1. Instalar
./install.sh

# 2. Configurar credenciais
nano .env

# 3. Rodar
npm run dev
```

Pronto! Bot rodando em `http://localhost:3000`

---

## 🎨 O QUE O BOT FAZ?

✅ Responde dúvidas sobre produtos Jotun  
✅ Calcula rendimento automaticamente  
✅ Explica diferenças entre produtos  
✅ Gera orçamentos básicos  
✅ Encaminha pra vendedor quando necessário  
✅ Atende 24/7 com contexto da B1 Tintas  

---

## 💰 QUANTO CUSTA?

**Total: ~R$ 220/mês**

- WhatsApp API (360dialog): €25/mês (~R$ 140)
- Claude API: ~R$ 50/mês (500-1000 conversas)
- Servidor (Railway): $5/mês (~R$ 28)

Escala conforme uso cresce!

---

## 🔑 CREDENCIAIS NECESSÁRIAS

Você vai precisar de:

1. **WhatsApp Business API Token** (360dialog ou Twilio)
2. **Claude API Key** (Anthropic)
3. **Conta Railway** (deploy)

[GUIA-SETUP.md](GUIA-SETUP.md) explica como conseguir cada uma.

---

## 📁 ARQUIVOS DO PROJETO

### 🚀 Código

- `server.js` - Bot principal
- `package.json` - Dependências
- `.env.example` - Template de configuração

### 🧪 Testes

- `test.js` - Script de teste local
- `install.sh` - Instalação automática

### 📚 Docs

- Todos os arquivos `.md` desta pasta

---

## 🛠️ COMANDOS ÚTEIS

```bash
npm install       # Instalar dependências
npm run dev       # Modo desenvolvimento
npm start         # Modo produção
node test.js      # Testar localmente
./install.sh      # Setup automático
```

---

## 🚀 DEPLOY EM PRODUÇÃO

### Railway (Recomendado)

1. Push código pro GitHub
2. Conecta Railway ao repo
3. Adiciona variáveis .env no painel
4. Deploy automático!

**Custo:** $5/mês (grátis tier disponível)

Detalhes completos em **[README.md](README.md)**

---

## 🧪 TESTAR ANTES DE DEPLOY

```bash
# Terminal 1: Rode o servidor
npm run dev

# Terminal 2: Teste com mensagem simulada
node test.js
```

Veja logs no Terminal 1 confirmando resposta.

---

## ❓ DÚVIDAS COMUNS

**"Preciso saber programar?"**  
→ NÃO! Só copiar/colar credenciais.

**"Vai substituir vendedores?"**  
→ NÃO! É assistente, não substituto.

**"E se der problema?"**  
→ Me chama! Respondo em 24h.

Mais em **[FAQ.md](FAQ.md)**

---

## 🗺️ PRÓXIMOS PASSOS

**Versão atual (1.0):** Bot funcional básico

**Próximas melhorias:**
- Histórico de conversas (banco de dados)
- Enviar fotos de produtos
- Gerar PDF de orçamento
- Dashboard de analytics

Veja roadmap completo em **[ROADMAP.md](ROADMAP.md)**

---

## 🆘 PRECISA DE AJUDA?

1. Consulte **[FAQ.md](FAQ.md)**
2. Veja **[GUIA-SETUP.md](GUIA-SETUP.md)**
3. Leia **[ESTRUTURA.md](ESTRUTURA.md)** (técnico)
4. Me chama!

---

## 📊 CHECKLIST DE SUCESSO

- [ ] Li o README.md
- [ ] Segui GUIA-SETUP.md
- [ ] Criei conta Claude API
- [ ] Criei conta 360dialog
- [ ] Configurei .env
- [ ] Testei localmente (test.js)
- [ ] Fiz deploy Railway
- [ ] Configurei webhook
- [ ] Enviei mensagem de teste
- [ ] **BOT RESPONDEU!** 🎉

---

## 🎉 TUDO PRONTO?

**Parabéns! Seu bot está no ar!** 🚀

Agora:
1. Monitore conversas nos logs
2. Ajuste contexto conforme necessário
3. Planeje próximas melhorias

**Desenvolvido com ❤️ por Silas para B1 Tintas**

---

**Versão:** 1.0.0  
**Data:** Janeiro 2025  
**Licença:** MIT
