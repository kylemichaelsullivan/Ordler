import type { ChangeEvent, KeyboardEvent } from 'react';

type WordInputProps = {
	index: number;
	value: string;
	isRequired: boolean;
	inputRef: (el: HTMLInputElement | null) => void;
	onInput: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
	onKeyDown: (e: KeyboardEvent<HTMLInputElement>, index: number) => void;
};

const WordInput = ({ index, value, isRequired, inputRef, onInput, onKeyDown }: WordInputProps) => {
	return (
		<input
			className={`WordInput h-12 w-12 flex-1 appearance-none border border-black text-center capitalize ${
				isRequired ? 'bg-green-400' : ''
			}`}
			maxLength={1}
			list='letters'
			onChange={e => onInput(e, index)}
			onKeyDown={e => onKeyDown(e, index)}
			value={value ?? 'No'}
			ref={inputRef}
		/>
	);
};

export default WordInput;
