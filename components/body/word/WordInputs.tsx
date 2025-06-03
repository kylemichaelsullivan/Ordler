import { useRef } from 'react';
import { View, TextInput } from 'react-native';
import type {
	NativeSyntheticEvent,
	TextInputChangeEventData,
	TextInputKeyPressEventData,
} from 'react-native';

import WordInput from './WordInput';
import type { Letter, Status } from '@/types/ordler';

type WordInputsProps = {
	requiredLetterPositions: (Letter | '')[];
	handleRequiredLetterPositionChange: (index: number, letter: Letter | '') => void;
	lettersStatus: { [key in Letter]: Status };
};

const WordInputs = ({
	requiredLetterPositions,
	handleRequiredLetterPositionChange,
	lettersStatus,
}: WordInputsProps) => {
	const inputRefs = useRef<(TextInput | null)[]>([]);

	const handleInput = (e: NativeSyntheticEvent<TextInputChangeEventData>, index: number) => {
		const value = e.nativeEvent.text.toLowerCase();

		// Only allow letters a-z that aren't excluded
		if (/^[a-z]$/.test(value) && lettersStatus[value as Letter] !== 0) {
			handleRequiredLetterPositionChange(index, value as Letter);
			if (index < inputRefs.current.length - 1) {
				inputRefs.current[index + 1]?.focus();
			}
		} else {
			handleRequiredLetterPositionChange(index, '');
		}
	};

	const handleKeyDown = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
		if (e.nativeEvent.key === 'Backspace' || e.nativeEvent.key === 'Delete') {
			handleRequiredLetterPositionChange(index, '');
			if (index > 0) {
				inputRefs.current[index - 1]?.focus();
			}
		}
	};

	return (
		<View className='WordInputs max-w-full flex flex-row items-center justify-center gap-2'>
			{Array.from({ length: 5 }, (_, index) => (
				<WordInput
					key={index}
					index={index}
					value={requiredLetterPositions[index] || ''}
					isRequired={!!requiredLetterPositions[index]}
					inputRef={el => {
						inputRefs.current[index] = el;
					}}
					onInput={handleInput}
					onKeyDown={handleKeyDown}
				/>
			))}
		</View>
	);
};

export default WordInputs;
