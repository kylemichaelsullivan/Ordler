import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider, useTheme } from '@/context/theme';
import { OrdlerContextProvider } from '@/context/ordler';

import Header from '@/components/header/Header';
import Body from '@/components/body/Body';
import Footer from '@/components/footer/Footer';

import { NativeWindStyleSheet } from 'nativewind';

import '@/global.css';
NativeWindStyleSheet.create({});

const AppContent = () => {
	const { isDarkMode } = useTheme();

	return (
		<SafeAreaView className={`App flex-1 ${isDarkMode ? 'dark' : ''}`}>
			<View className='mx-auto w-full max-w-4xl flex-1'>
				<Header />
				<Body />
				<Footer />
			</View>
			<StatusBar style={isDarkMode ? 'light' : 'dark'} />
		</SafeAreaView>
	);
};

const App = () => {
	return (
		<ThemeProvider>
			<OrdlerContextProvider>
				<AppContent />
			</OrdlerContextProvider>
		</ThemeProvider>
	);
};

export default App;
