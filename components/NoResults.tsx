import { View, Text } from 'react-native';

export default function NoResults() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-gray-400">No words found</Text>
    </View>
  );
}
