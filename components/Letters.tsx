import React from 'react';
import { View, Text } from 'react-native';

type LettersProps = {
  // Add props here as needed
};

const Letters = ({}: LettersProps) => {
  return (
    <View className="Letters">
      <Text className="text-gray-900 dark:text-gray-100">Letters</Text>
    </View>
  );
};

export default Letters;
