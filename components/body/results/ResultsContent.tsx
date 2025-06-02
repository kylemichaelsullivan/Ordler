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

	return (
		<View className='ResultsContent flex-1'>
			{nonNullLettersCount < 2 ?
				<SelectMore />
			: words.length > 0 ?
				<ResultsList words={words} />
			:	<NoResults />}
		</View>
	);
};

export default ResultsContent;
