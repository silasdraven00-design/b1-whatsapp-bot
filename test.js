const axios = require('axios');

// ============================================
// TESTE LOCAL - Simula mensagem WhatsApp
// ============================================

const WEBHOOK_URL = 'http://localhost:3000/webhook';

// Payload que simula uma mensagem real do WhatsApp
const testMessage = {
  entry: [{
    changes: [{
      value: {
        messages: [{
          from: '5571999999999', // Número de teste
          type: 'text',
          text: {
            body: 'Olá, preciso pintar uma parede de 50m². Qual tinta vocês recomendam?'
          },
          timestamp: Date.now()
        }],
        metadata: {
          display_phone_number: '5571988888888',
          phone_number_id: '123456789'
        }
      }
    }]
  }]
};

async function testBot() {
  console.log('🧪 Testando bot localmente...\n');
  console.log('📨 Enviando mensagem simulada:');
  console.log(`   "${testMessage.entry[0].changes[0].value.messages[0].text.body}"\n`);

  try {
    const response = await axios.post(WEBHOOK_URL, testMessage);
    console.log('✅ Mensagem enviada com sucesso!');
    console.log(`📊 Status: ${response.status}`);
    console.log('\n⏳ Aguardando resposta do bot...');
    console.log('💡 Verifique os logs do servidor para ver a resposta do Claude\n');
  } catch (error) {
    console.error('❌ Erro ao testar:', error.message);
    console.log('\n⚠️  Certifique-se de que o servidor está rodando:');
    console.log('   npm run dev\n');
  }
}

// Rodar teste
testBot();
