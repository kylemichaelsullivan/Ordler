import { View, Text } from 'react-native';

import Letters from './Letters';
import Word from './Word';
import Results from './Results';

export default function Body() {
  return (
    <View className="flex-1 flex-col gap-4 bg-gray-500 items-start justify-start dark:bg-gray-900">
      <Letters />
      <Word />
      <Results />
    </View>
  );
}
