#!/bin/bash

# ============================================
# B1 TINTAS - SCRIPT DE INSTALAÇÃO RÁPIDA
# ============================================

echo "🎨 B1 Tintas WhatsApp Bot - Instalação Automática"
echo "=================================================="
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado!"
    echo "📥 Instale Node.js primeiro: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"
echo ""

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado!"
    exit 1
fi

echo "✅ npm $(npm -v) detectado"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências"
    exit 1
fi

echo "✅ Dependências instaladas com sucesso!"
echo ""

# Criar .env se não existir
if [ ! -f .env ]; then
    echo "📝 Criando arquivo .env..."
    cp .env.example .env
    echo "✅ Arquivo .env criado!"
    echo ""
    echo "⚠️  IMPORTANTE: Edite o arquivo .env com suas credenciais:"
    echo "   - WHATSAPP_TOKEN"
    echo "   - WHATSAPP_PHONE_ID"
    echo "   - CLAUDE_API_KEY"
    echo ""
else
    echo "ℹ️  Arquivo .env já existe, mantendo configurações atuais"
    echo ""
fi

# Verificar se .env está configurado
echo "🔍 Verificando configurações..."

if grep -q "seu_token_aqui" .env || grep -q "sua_api_key_claude" .env; then
    echo "⚠️  ATENÇÃO: Você precisa configurar o arquivo .env!"
    echo ""
    echo "Edite .env e substitua:"
    echo "  - WHATSAPP_TOKEN=seu_token_aqui"
    echo "  - WHATSAPP_PHONE_ID=seu_phone_id_aqui"
    echo "  - CLAUDE_API_KEY=sua_api_key_claude"
    echo ""
    echo "Depois rode: npm run dev"
    echo ""
else
    echo "✅ Arquivo .env parece configurado!"
    echo ""
    echo "🚀 Pronto para rodar!"
    echo ""
    echo "Execute:"
    echo "  npm run dev     (modo desenvolvimento)"
    echo "  npm start       (modo produção)"
    echo ""
    echo "Teste:"
    echo "  node test.js    (simula mensagem WhatsApp)"
    echo ""
fi

echo "=================================================="
echo "📚 Guias disponíveis:"
echo "  - README.md          (documentação completa)"
echo "  - GUIA-SETUP.md      (passo a passo)"
echo "  - FAQ.md             (perguntas frequentes)"
echo "  - EXEMPLOS-TESTE.md  (casos de teste)"
echo "  - ROADMAP.md         (próximas melhorias)"
echo "=================================================="
echo ""
echo "🎉 Instalação concluída!"
