import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from '@context/theme';
import { OrdleContextProvider } from '@context/ordler';

import Header from '@components/Header';
import Body from '@components/Body';
import Footer from '@components/Footer';

import '@/global.css';

function App() {
	return (
		<ThemeProvider>
			<OrdleContextProvider>
				<SafeAreaView className="App flex-1 bg-background">
					<View className="mx-auto w-full max-w-4xl flex-1">
						<Header />
						<Body />
						<Footer />
					</View>
					<StatusBar style="light" />
				</SafeAreaView>
			</OrdleContextProvider>
		</ThemeProvider>
	);
}

export default App;
