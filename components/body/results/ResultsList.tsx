import { View } from 'react-native';

import Result from './Result';

type ResultsListProps = {
	words: string[];
};

const ResultsList = ({ words }: ResultsListProps) => {
	return (
		<View className='ResultsList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{words.map((word, index) => (
				<Result key={index} word={word} />
			))}
		</View>
	);
};

export default ResultsList;
