import React from 'react';
import { View, Text } from 'react-native';

type ResultsProps = {
  // Add props here as needed
};

const Results = ({}: ResultsProps) => {
  return (
    <View className="Results">
      <Text className="text-gray-900 dark:text-gray-100">Results</Text>
    </View>
  );
};

export default Results;
