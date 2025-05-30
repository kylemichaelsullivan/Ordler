import { View } from 'react-native';

import { useOrdle } from '@context/ordler';

import SelectMore from '@components/SelectMore';
import ResultsList from '@components/ResultsList';
import NoResults from '@components/NoResults';

type ResultsContentProps = {
	words: string[];
};

export default function ResultsContent({ words }: ResultsContentProps) {
	const { nonNullLettersCount } = useOrdle();

	return (
		<View className="flex-1 rounded-lg border p-4 shadow-lg">
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
