import { View } from 'react-native';

import { useOrdler } from '@context/ordler';

import SelectMore from '@components/SelectMore';
import ResultsList from '@components/ResultsList';
import NoResults from '@components/NoResults';

type ResultsContentProps = {
	words: string[];
};

const ResultsContent = ({ words }: ResultsContentProps) => {
	const { nonNullLettersCount } = useOrdler();

	return (
		<View className='ResultsContent has-light-background-color has-dark-border-color flex-1 rounded-lg border p-4 shadow-lg'>
			{nonNullLettersCount < 2 ?
				<SelectMore />
			: words.length > 0 ?
				<ResultsList words={words} />
			:	<NoResults />}
		</View>
	);
};

export default ResultsContent;
