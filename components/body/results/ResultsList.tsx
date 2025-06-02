import { View } from 'react-native';

import Result from './Result';

type ResultsListProps = {
	words: string[];
};

const ResultsList = ({ words }: ResultsListProps) => {
	return (
		<View className='ResultsList grid grid-cols-4 gap-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12'>
			{words.map((word, index) => (
				<Result key={index} word={word} />
			))}
		</View>
	);
};

export default ResultsList;
