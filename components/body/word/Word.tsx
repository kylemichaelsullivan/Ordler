import { View } from 'react-native';

import { useOrdler } from '@/context/ordler';

import WordInputs from './WordInputs';

const Word = () => {
	const { requiredLetterPositions, handleRequiredLetterPositionChange, lettersStatus } =
		useOrdler();

	return (
		<View className='Word max-w-full text-center'>
			<WordInputs
				requiredLetterPositions={requiredLetterPositions}
				handleRequiredLetterPositionChange={handleRequiredLetterPositionChange}
				lettersStatus={lettersStatus}
			/>
		</View>
	);
};

export default Word;
