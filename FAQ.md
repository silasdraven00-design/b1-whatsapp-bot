# ❓ FAQ - PERGUNTAS FREQUENTES

## 🤔 DÚVIDAS GERAIS

### O bot vai substituir vendedores?

**NÃO!** O bot é um **assistente**, não substituto.

**Função dele:**
- Atender 24/7
- Responder dúvidas simples
- Fazer cálculos de rendimento
- Enviar fichas técnicas
- **Encaminhar pra vendedor quando necessário**

**Vendedor humano continua essencial para:**
- Negociar descontos
- Fechar vendas grandes
- Atender casos especiais
- Construir relacionamento

---

### O bot vai errar alguma coisa?

**Pode acontecer nos primeiros dias.**

IA é muito boa, mas não é 100% perfeita. Por isso:

✅ **Temos safeguards:**
- Bot nunca inventa preços
- Nunca promete desconto
- Encaminha pra humano em dúvidas complexas

✅ **Você monitora:**
- Vê todas conversas nos logs
- Pode ajustar respostas
- Eu te ajudo a calibrar

---

### Preciso de técnico pra manter?

**NÃO!** Sistema roda sozinho.

**O que você precisa fazer:**
- Nada (se tá funcionando)
- Me chamar se der problema
- Atualizar contexto se mudar algo (ex: novo produto)

---

## 💰 CUSTOS

### Quanto custa por conversa?

**Claude API:** ~R$ 0,05 por conversa completa

**Exemplo:**
- 100 conversas/dia = R$ 5/dia = **R$ 150/mês** (só Claude)
- 500 conversas/dia = R$ 25/dia = **R$ 750/mês**

**Total (com WhatsApp + servidor):**
- Volume baixo: ~R$ 220/mês
- Volume médio: ~R$ 350/mês
- Volume alto: ~R$ 600/mês

---

### E se estourar o orçamento?

**Opções:**

1. **Limitar conversas/dia** (ex: máximo 200)
2. **Horário comercial** (bot só funciona 8h-18h)
3. **Escalar pra plano maior** (mais conversas, mais barato por unidade)

Configurável facilmente!

---

## 🔧 TÉCNICO

### Onde ficam armazenadas as conversas?

**Versão 1.0 (atual):** Não armazena, só logs temporários

**Versão 1.1 (próxima):** Banco de dados seguro

**Privacidade:** Seguimos LGPD, dados são do cliente

---

### Como atualizo o bot?

**Opção 1: Pedir pra mim** (mais seguro)
- Me manda: "Atualiza o contexto"
- Eu faço deploy

**Opção 2: Você mesmo**
1. Edita arquivo `server.js`
2. Procura `B1_CONTEXT`
3. Modifica texto
4. Faz commit + push no GitHub
5. Railway faz deploy automático

---

### Bot trava se muita gente usar ao mesmo tempo?

**NÃO!** Sistema é escalável.

**Arquitetura:**
- Cada mensagem é processada independentemente
- Servidor aguenta centenas de conversas simultâneas
- Se volume crescer muito, Railway escala automaticamente

---

### E se cair a internet?

**WhatsApp guarda mensagens.**

Quando voltar:
- Bot processa tudo que chegou
- Responde em ordem
- Nenhuma mensagem perdida

---

### Posso mudar de provider (360dialog → Twilio)?

**SIM!** Código é agnóstico.

Basta:
1. Atualizar tokens no `.env`
2. Reconfigurar webhook
3. Pronto

---

## 📊 USO PRÁTICO

### Como sei se bot tá funcionando?

**Acesse:** `https://seuapp.railway.app/`

Se retornar:
```json
{"status": "online"}
```
→ Tá rodando!

---

### Onde vejo as conversas?

**Opção 1: Logs Railway**
- Painel Railway → View Logs
- Mostra cada mensagem em tempo real

**Opção 2: Dashboard (v1.1)**
- Interface web visual
- Gráficos, métricas, etc

---

### Como desativo temporariamente?

**Método 1: Pausar Railway**
- Painel Railway → Settings → Pause

**Método 2: Remover webhook**
- Painel 360dialog → Delete webhook
- Bot para de receber mensagens

**Método 3: Horário comercial**
```javascript
// Adiciona no código
const hour = new Date().getHours();
if (hour < 8 || hour > 18) {
  return "Estamos fora do horário. Retornamos às 8h!";
}
```

---

### Cliente pode mandar áudio/foto?

**Versão 1.0:** Ignora (só texto)

**Versão 1.3:** Processa fotos (pra análise)

**Áudio:** Não planejo suportar (transcrição é cara)

---

## 🛡️ SEGURANÇA

### Alguém pode hackear?

**Segurança em camadas:**

1. **Tokens secretos** (ninguém vê)
2. **HTTPS obrigatório** (criptografado)
3. **Webhook verificação** (só WhatsApp oficial envia)
4. **Rate limiting** (previne spam)

**Seu papel:**
- NUNCA commitar `.env` no Git
- NUNCA compartilhar tokens

---

### E se alguém spammar o bot?

**Solução simples:**
```javascript
// Limitar mensagens por número
const MAX_MESSAGES_PER_MINUTE = 5;
```

Bloqueia automaticamente se passar do limite.

---

## 📈 CRESCIMENTO

### Quantas conversas aguenta?

**Limites práticos:**

| Setup | Conversas/dia | Custo/mês |
|-------|---------------|-----------|
| Railway Free | ~100 | R$ 220 |
| Railway Pro | ~1000 | R$ 350 |
| VPS próprio | 10000+ | R$ 600+ |

---

### Como escalar se viralizar?

**Passos:**

1. Upgrade Railway ($20/mês)
2. Adicionar cache (Redis)
3. Load balancer (múltiplos servidores)
4. CDN para imagens

**Eu te ajudo se chegar lá!** 🚀

---

## 🤝 SUPORTE

### Como peço ajuda?

**Me manda:**
1. Print do erro (se tiver)
2. Logs (Railway → View Logs)
3. O que você tentou fazer

**Respondo em:** Máximo 24h (geralmente 2-3h)

---

### Tem suporte oficial Anthropic/360dialog?

**Anthropic (Claude):**
- Docs: https://docs.anthropic.com
- Suporte: support@anthropic.com

**360dialog:**
- Docs: https://docs.360dialog.com
- Chat suporte no dashboard

---

### Posso revender esse bot?

**SIM!** Código é seu.

**Ideias:**
- Oferecer pra outras lojas de tinta
- Adaptar pra outros segmentos
- Vender como serviço (SaaS)

**Precisa ajustar:** Contexto, branding, etc.

---

## 🎓 APRENDIZADO

### Não sei programar, consigo usar?

**SIM!** Tudo funciona sem código.

**Você só precisa:**
1. Copiar/colar credenciais
2. Clicar em "Deploy"
3. Pronto!

**Pra customizar:** Me chama que eu faço.

---

### Onde aprendo mais sobre IA/bots?

**Recomendações:**

📚 Cursos:
- Anthropic Docs (gratuito)
- YouTube: "WhatsApp Business API tutorial"

🛠️ Ferramentas:
- Postman (testar APIs)
- Railway (hosting)

💬 Comunidades:
- Discord Anthropic
- Reddit r/ChatGPT

---

## 🚨 EMERGÊNCIAS

### Bot tá respondendo coisas estranhas!

**RÁPIDO:**
1. Pause Railway (stop deploy)
2. Me manda print das respostas
3. Eu ajusto contexto
4. Reativo em minutos

---

### Gastou muito crédito Claude!

**PREVENÇÃO:**
```javascript
// Adiciona limite diário
if (dailyUsage > DAILY_LIMIT) {
  return "Limite diário atingido. Volte amanhã!";
}
```

**RECUPERAÇÃO:**
- Adiciona mais crédito Anthropic
- Ou pausa até mês seguinte

---

## 📞 CONTATO DIRETO

**Dúvida não listada aqui?**

Me chama:
- WhatsApp: [seu número]
- Email: [seu email]
- GitHub Issues: [link do repo]

**Sempre respondo!** 🤝

---

**Última atualização:** Janeiro 2025
