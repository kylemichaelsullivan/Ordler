import { View, Text } from 'react-native';

type WordProps = {
  //
};

const Word = ({}: WordProps) => {
  return (
    <View className="Word">
      <Text className="text-gray-900 dark:text-gray-100">Word</Text>
    </View>
  );
};

export default Word;
