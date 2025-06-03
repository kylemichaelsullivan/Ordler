import { useOrdler } from '@/context/ordler';

import WordInputs from './WordInputs';
import LetterList from './LetterList';

const Word = () => {
	const { requiredLetters, requiredLetterPositions, handleRequiredLetterPositionChange } =
		useOrdler();

	return (
		<div className='Word max-w-full text-center'>
			<WordInputs
				requiredLetterPositions={requiredLetterPositions}
				handleRequiredLetterPositionChange={handleRequiredLetterPositionChange}
			/>
			<LetterList letters={requiredLetters} />
		</div>
	);
};

export default Word;
