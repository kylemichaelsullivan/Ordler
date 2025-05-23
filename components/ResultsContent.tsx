import { View } from 'react-native';

import { useOrdle } from '@/context';

import SelectMore from '@/components/SelectMore';
import ResultsList from '@/components/ResultsList';
import NoResults from '@/components/NoResults';

type ResultsContentProps = {
  words: string[];
};

export default function ResultsContent({ words }: ResultsContentProps) {
  const { nonNullLettersCount } = useOrdle();

  return (
    <View className="flex-1 p-4 border rounded-lg shadow-lg">
      {nonNullLettersCount < 2 ? (
        <SelectMore />
      ) : words.length > 0 ? (
        <ResultsList words={words} />
      ) : (
        <NoResults />
      )}
    </View>
  );
}
