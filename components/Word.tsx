import { useOrdler } from '@context/ordler';
import WordInputs from './WordInputs';
import LetterList from './LetterList';

const Word = () => {
	const { requiredLetters, requiredLetterPositions, handleRequiredLetterPositionChange } =
		useOrdler();

	return (
		<div className='Word flex max-w-full justify-center gap-1'>
			<WordInputs
				requiredLetterPositions={requiredLetterPositions}
				handleRequiredLetterPositionChange={handleRequiredLetterPositionChange}
			/>
			<LetterList letters={requiredLetters} />
		</div>
	);
};

export default Word;
