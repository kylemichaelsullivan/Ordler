import { memo } from 'react';
import { View } from 'react-native';

import { useOrdler } from '@/context/ordler';

import SelectMore from './SelectMore';
import ResultsContent from './ResultsContent';
import NoResults from './NoResults';

const Results = memo(() => {
	const { filteredWords, nonNullLettersCount } = useOrdler();

	let content;
	if (nonNullLettersCount < 2) {
		content = <SelectMore />;
	} else if (filteredWords.length === 0) {
		content = <NoResults />;
	} else {
		content = <ResultsContent words={filteredWords} />;
	}

	return (
		<View className='Results has-light-background-color has-dark-border-color flex-1 border rounded-lg p-4 sm:p-6 md:p-8'>
			{content}
		</View>
	);
});

export default Results;
