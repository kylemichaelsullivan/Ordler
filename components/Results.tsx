import { View } from 'react-native';

import { useOrdler } from '@context/ordler';

import ResultsContent from '@components/ResultsContent';
import NoResults from '@components/NoResults';

type ResultsProps = {
	className?: string;
};

const Results = ({ className }: ResultsProps) => {
	const { filteredWords } = useOrdler();

	return (
		<View
			className={`Results has-light-background-color has-dark-border-color flex-1 border p-4 ${className || ''}`}
		>
			{filteredWords.length > 0 ?
				<ResultsContent words={filteredWords} />
			:	<NoResults />}
		</View>
	);
};

export default Results;
