import { View } from 'react-native';

import { useOrdler } from '@/context/ordler';

import SelectMore from './SelectMore';
import ResultsContent from './ResultsContent';
import NoResults from './NoResults';

type ResultsProps = {
	className?: string;
};

const Results = ({ className }: ResultsProps) => {
	const { filteredWords, nonNullLettersCount } = useOrdler();

	let content;
	if (nonNullLettersCount < 2) {
		content = <SelectMore />;
	} else if (filteredWords.length > 0) {
		content = <ResultsContent words={filteredWords} />;
	} else {
		content = <NoResults />;
	}

	return (
		<View
			className={`Results has-light-background-color has-dark-border-color flex-1 border p-4 ${className || ''}`}
		>
			{content}
		</View>
	);
};

export default Results;
