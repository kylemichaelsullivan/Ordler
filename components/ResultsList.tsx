import { View } from 'react-native';
import Result from './Result';

interface ResultsListProps {
  words: string[];
}

export default function ResultsList({ words }: ResultsListProps) {
  return (
    <View className="flex-1">
      {words.map((word, index) => (
        <Result key={index} word={word} index={index} />
      ))}
    </View>
  );
}
