import { TextInput } from 'react-native';
import type {
	NativeSyntheticEvent,
	TextInputChangeEventData,
	TextInputKeyPressEventData,
} from 'react-native';

type WordInputProps = {
	index: number;
	value: string;
	isRequired: boolean;
	inputRef: (el: TextInput | null) => void;
	onInput: (e: NativeSyntheticEvent<TextInputChangeEventData>, index: number) => void;
	onKeyDown: (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => void;
};

const WordInput = ({ index, value, isRequired, inputRef, onInput, onKeyDown }: WordInputProps) => {
	const bgColor = isRequired ? 'has-green-background-color' : 'has-light-background-color';

	return (
		<TextInput
			className={`WordInput ${bgColor} has-dark-border-color has-black-color h-12 min-w-12 max-w-14 flex-1 appearance-none border text-center capitalize`}
			maxLength={1}
			onChange={e => onInput(e, index)}
			onKeyPress={e => onKeyDown(e, index)}
			value={value ?? ''}
			ref={inputRef}
			style={{ textAlign: 'center', textTransform: 'capitalize' }}
			autoCapitalize='characters'
			autoCorrect={false}
		/>
	);
};

export default WordInput;
