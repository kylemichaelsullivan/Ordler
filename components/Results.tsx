import { View, Text } from 'react-native';
import { useOrdle } from '../context';
import ResultsContent from './ResultsContent';
import NoResults from './NoResults';

type ResultsProps = {
  className?: string;
};

export default function Results({ className }: ResultsProps) {
  const { filteredWords } = useOrdle();

  return (
    <View className={`flex-1 ${className || ''}`}>
      {filteredWords.length > 0 ? (
        <ResultsContent words={filteredWords} />
      ) : (
        <NoResults />
      )}
    </View>
  );
}
