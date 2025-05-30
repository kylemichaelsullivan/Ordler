import { View } from 'react-native';

import Result from '@components/Result';

type ResultsListProps = {
	words: string[];
};

const ResultsList = ({ words }: ResultsListProps) => {
	return (
		<View className='flex-1'>
			{words.map((word, index) => (
				<Result key={index} word={word} />
			))}
		</View>
	);
};

export default ResultsList;
