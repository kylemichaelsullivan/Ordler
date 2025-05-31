module.exports = {
	name: 'Ordler',
	slug: 'ordler',
	version: '1.0.0',
	orientation: 'portrait',
	icon: './assets/icon.png',
	userInterfaceStyle: 'automatic',
	splash: {
		image: './assets/splash.png',
		resizeMode: 'contain',
		backgroundColor: '#ffffff',
	},
	ios: {
		supportsTablet: true,
	},
	android: {
		adaptiveIcon: {
			foregroundImage: './assets/ordler-icon.png',
			backgroundColor: '#ffffff',
		},
	},
	web: {
		bundler: 'webpack',
		favicon: './assets/favicon.png',
		output: 'single',
		build: {
			babel: {
				include: ['@expo/vector-icons', 'react-native-web', 'nativewind'],
			},
		},
		plugins: ['nativewind'],
	},
	plugins: ['expo-router'],
};
