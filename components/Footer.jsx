import { View, Text } from 'react-native';

import Reset from './Reset';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <View className="flex flex-col items-center justify-center bg-gray-800 p-4 sm:flex-row sm:justify-between">
      <Text className="text-white font-bold text-center">
        Ordler © {currentYear}
      </Text>
      <Reset />
    </View>
  );
}
