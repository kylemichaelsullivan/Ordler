const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add CSS support
config.resolver.sourceExts = [...config.resolver.sourceExts, 'css'];

module.exports = config;
