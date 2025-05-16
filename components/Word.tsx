import React from 'react';
import { View, Text } from 'react-native';

type WordProps = {
  // Add props here as needed
};

const Word = ({}: WordProps) => {
  return (
    <View className="Word">
      <Text className="text-base text-gray-900 dark:text-gray-100">Word</Text>
    </View>
  );
};

export default Word;
