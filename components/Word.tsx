import { View } from 'react-native';

import WordInputs from '@components/WordInputs';

type WordProps = {
	//
};

const Word = ({}: WordProps) => {
	return (
		<View className="Word flex flex-row items-center justify-center">
			<WordInputs
				requiredLetterPositions={[]}
				handleRequiredLetterPositionChange={() => {}}
			/>
		</View>
	);
};

export default Word;
