import { View, Text } from 'react-native';

export default function Header() {
  return (
    <View className="Header bg-background/5 p-4">
      <Text className="text-foreground text-2xl font-bold text-center">
        Ordler
      </Text>
    </View>
  );
}
