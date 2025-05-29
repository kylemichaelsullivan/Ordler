import { View } from 'react-native';

import { useOrdle } from '@context/ordler';

import ResultsContent from '@components/ResultsContent';
import NoResults from '@components/NoResults';

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
