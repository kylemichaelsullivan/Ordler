import { View, ScrollView } from 'react-native';

import Letters from '@components/Letters';
import Word from '@components/Word';
import Results from '@components/Results';

export default function Body() {
  return (
    <ScrollView className="flex-1 w-full bg-background">
      <View className="flex-1 w-full p-4 gap-6 bg-background/5 min-h-[calc(100vh-8rem)]">
        <Letters />
        <Word />
        <Results />
      </View>
    </ScrollView>
  );
}
