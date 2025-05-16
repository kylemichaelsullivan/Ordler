import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import './global.css';

export default function App() {
  return (
    <SafeAreaView className="App flex-1 bg-black dark:bg-black">
      <Header />
      <Body />
      <Footer />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
