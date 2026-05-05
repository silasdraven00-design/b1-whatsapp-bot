# 🧪 CENÁRIOS DE TESTE - COPIE E COLE NO WHATSAPP

## 1️⃣ CONSULTA SIMPLES

```
Olá, qual o horário de funcionamento?
```

**Resposta esperada:** Horário da loja

---

## 2️⃣ CÁLCULO DE RENDIMENTO

```
Preciso pintar uma parede de 80m². Quanto de tinta vou precisar?
```

**Resposta esperada:** Perguntas sobre tipo de parede (interna/externa) e acabamento

---

## 3️⃣ DÚVIDA SOBRE PRODUTO

```
Qual a diferença entre Jotashield Ultra e Jotashield Antimofo?
```

**Resposta esperada:** Comparação técnica dos produtos

---

## 4️⃣ SOLICITAÇÃO DE ORÇAMENTO

```
Quero orçamento para pintar uma casa de 200m² externa
```

**Resposta esperada:** Perguntas sobre acabamento desejado e endereço de entrega

---

## 5️⃣ PERGUNTA SOBRE PREÇO

```
Quanto custa um galão de Jotashield Ultra?
```

**Resposta esperada:** "Preciso consultar valores atualizados" + oferta de contato com vendedor

---

## 6️⃣ PRODUTO ESPECÍFICO

```
Vocês tem Jotatemp 1000?
```

**Resposta esperada:** Informações sobre o produto + disponibilidade

---

## 7️⃣ DÚVIDA TÉCNICA

```
Quantas demãos preciso dar de Fenomastic?
```

**Resposta esperada:** Orientações técnicas de aplicação

---

## 8️⃣ FICHA TÉCNICA

```
Quero a ficha técnica da Lady Pure Color
```

**Resposta esperada:** Informação sobre TDS/SDS/AG disponíveis

---

## 9️⃣ COMPARAÇÃO

```
É melhor usar Jotun Maxi ou Jotashield para fachada?
```

**Resposta esperada:** Comparação com base em durabilidade/custo-benefício

---

## 🔟 FORA DO ESCOPO

```
Vocês vendem pincéis?
```

**Resposta esperada:** Explicação de que foca em tintas Jotun + encaminhamento pra vendedor se necessário

---

## 1️⃣1️⃣ CONVERSA COMPLETA (TESTE REALISTA)

```
Mensagem 1: Olá
Mensagem 2: Preciso pintar minha casa
Mensagem 3: É uma casa de 150m² externa
Mensagem 4: Quero algo bom, que dure bastante
Mensagem 5: Quanto fica?
Mensagem 6: Entregar em Salvador mesmo
Mensagem 7: Pode mandar o orçamento
```

**Resposta esperada:** Conversa fluída com perguntas adequadas a cada etapa

---

## 🎯 TESTE DE STRESS

```
Mensagem rápida sequencial (5 em 10 segundos):
1. Olá
2. Preciso de tinta
3. Quanto custa?
4. Tem entrega?
5. Orçamento agora
```

**Resposta esperada:** Bot responde todas em ordem sem travar

---

## 💬 MENSAGENS QUE O BOT DEVE IGNORAR

- Áudio (não processa)
- Foto sem texto (não processa)
- Sticker (ignora)
- Localização (ignora)

---

## ✅ CHECKLIST DE QUALIDADE

Após testar, o bot deve:

- [ ] Responder em até 3 segundos
- [ ] Usar emojis com moderação (🎨 ✅ 📊)
- [ ] Nunca inventar preços
- [ ] Sempre perguntar antes de calcular rendimento
- [ ] Ser educado mas objetivo
- [ ] Oferecer contato com vendedor quando apropriado
- [ ] Não repetir a mesma informação
- [ ] Entender contexto (se já perguntou área, não perguntar de novo)

---

## 🐛 REPORTAR BUGS

Se encontrar resposta estranha:

1. Copie a conversa completa
2. Print da resposta
3. Me manda: "Bug encontrado: [descrição]"

Vou ajustar o contexto do Claude!
