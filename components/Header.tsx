import { View, Text } from 'react-native';

import ThemeToggle from '@components/ThemeToggle';

export default function Header() {
  return (
    <View className="Header bg-background/5 p-4 flex flex-row justify-between items-center">
      <Text className="text-foreground text-2xl font-bold text-center flex-1">
        Ordler
      </Text>
      <ThemeToggle />
    </View>
  );
}
