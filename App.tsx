import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { OrdleContextProvider } from '@/context';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

import '@/global.css';

function App() {
  return (
    <OrdleContextProvider>
      <SafeAreaView className="flex-1 bg-background">
        <View className="flex-1 max-w-4xl mx-auto w-full">
          <Header />
          <Body />
          <Footer />
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </OrdleContextProvider>
  );
}

export default App;
