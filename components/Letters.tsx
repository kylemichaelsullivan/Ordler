import { View } from 'react-native';

import { letters } from '../types/ordler';

import Letter from './Letter';

export default function Letters() {
  return (
    <View className="flex-row flex-wrap gap-2">
      {letters.map((letter) => (
        <Letter key={letter} letter={letter} />
      ))}
    </View>
  );
}
