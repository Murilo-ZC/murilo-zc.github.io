const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname, {
  // Configuração específica para o Expo Router
  isCSSEnabled: true,
});

// Configurações adicionais para garantir compatibilidade
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config; 