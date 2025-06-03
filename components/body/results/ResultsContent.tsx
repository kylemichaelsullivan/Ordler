import { View } from 'react-native';

import { useOrdler } from '@/context/ordler';

import SelectMore from './SelectMore';
import ResultsList from './ResultsList';
import NoResults from './NoResults';

type ResultsContentProps = {
	words: string[];
};

const ResultsContent = ({ words }: ResultsContentProps) => {
	const { nonNullLettersCount } = useOrdler();

	if (nonNullLettersCount < 2) {
		return <SelectMore />;
	}

	if (words.length === 0) {
		return <NoResults />;
	}

	return <ResultsList words={words} />;
};

export default ResultsContent;
