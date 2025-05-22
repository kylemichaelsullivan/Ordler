import { View, ScrollView } from 'react-native';

import Letters from './Letters';
import Word from './Word';
import Results from './Results';

export default function Body() {
  return (
    <ScrollView className="flex-1 w-full">
      <View className="flex-1 w-full p-4 gap-6 bg-gray-900 min-h-[calc(100vh-8rem)]">
        <Letters />
        <Word />
        <Results />
      </View>
    </ScrollView>
  );
}
