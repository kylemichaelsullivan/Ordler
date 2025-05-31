import { useState, useEffect, createContext, useContext, type ReactNode } from 'react';

import { allWords } from '@data/allWords';

import type { Letter, Status } from '@/types/ordler';

type LettersStatus = {
	[key in Letter]: Status;
};

type OrdlerState = {
	lettersStatus: LettersStatus;
	nonNullLettersCount: number;
	requiredLetters: Letter[];
	requiredLetterPositions: (Letter | '')[];
	filteredWords: string[];
};

type OrdlerContextType = OrdlerState & {
	handleLettersStatusChange: (letter: Letter, status: Status) => void;
	handleRequiredLetterPositionChange: (index: number, letter: Letter | '') => void;
	reset: () => void;
};

const OrdlerContext = createContext<OrdlerContextType | undefined>(undefined);

type OrdlerContextProviderProps = {
	children: ReactNode;
};

const initialLettersStatus: LettersStatus = {
	a: null,
	b: null,
	c: null,
	d: null,
	e: null,
	f: null,
	g: null,
	h: null,
	i: null,
	j: null,
	k: null,
	l: null,
	m: null,
	n: null,
	o: null,
	p: null,
	q: null,
	r: null,
	s: null,
	t: null,
	u: null,
	v: null,
	w: null,
	x: null,
	y: null,
	z: null,
};

const initialState: OrdlerState = {
	lettersStatus: initialLettersStatus,
	nonNullLettersCount: 0,
	requiredLetters: [],
	requiredLetterPositions: ['', '', '', '', ''],
	filteredWords: [],
};

const useWordFiltering = (
	lettersStatus: LettersStatus,
	requiredLetterPositions: (Letter | '')[]
) => {
	const [filteredWords, setFilteredWords] = useState<string[]>([]);
	const [requiredLetters, setRequiredLetters] = useState<Letter[]>([]);
	const [nonNullLettersCount, setNonNullLettersCount] = useState(0);

	useEffect(() => {
		const count = Object.values(lettersStatus).filter(status => status !== null).length;
		setNonNullLettersCount(count);

		if (count >= 2) {
			const newFilteredWords = allWords
				.filter(word =>
					Object.entries(lettersStatus).every(([letter, status]) => {
						if (status === 1) return word.includes(letter);
						if (status === 0) return !word.includes(letter);
						return true;
					})
				)
				.filter(word =>
					requiredLetterPositions.every((letter, index) => !letter || word[index] === letter)
				);
			setFilteredWords(newFilteredWords);
		} else {
			setFilteredWords([]);
		}

		const newRequiredLetters = Object.entries(lettersStatus)
			.filter(([_, status]) => status === 1)
			.map(([letter, _]) => letter as Letter);
		setRequiredLetters(newRequiredLetters);
	}, [lettersStatus, requiredLetterPositions]);

	return { filteredWords, requiredLetters, nonNullLettersCount };
};

const useKeyboardReset = (reset: () => void) => {
	useEffect(() => {
		const handleKeyUp = (e: globalThis.KeyboardEvent) => {
			if (e.key === 'Escape') {
				reset();
			}
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('keyup', handleKeyUp);
			return () => window.removeEventListener('keyup', handleKeyUp);
		}
	}, [reset]);
};

export function OrdlerContextProvider({ children }: OrdlerContextProviderProps) {
	const [state, setState] = useState<OrdlerState>(initialState);
	const { filteredWords, requiredLetters, nonNullLettersCount } = useWordFiltering(
		state.lettersStatus,
		state.requiredLetterPositions
	);

	const handleLettersStatusChange = (letter: Letter, status: Status) => {
		setState(prev => ({
			...prev,
			lettersStatus: {
				...prev.lettersStatus,
				[letter]: prev.lettersStatus[letter] === status ? null : status,
			},
		}));
	};

	const handleRequiredLetterPositionChange = (index: number, letter: Letter | '') => {
		setState(prev => {
			const newPositions = [...prev.requiredLetterPositions];
			const prevLetter = newPositions[index];
			newPositions[index] = letter;

			const newLettersStatus = { ...prev.lettersStatus };
			if (prevLetter) {
				newLettersStatus[prevLetter] = null;
			}
			if (letter) {
				newLettersStatus[letter] = 1;
			}

			return {
				...prev,
				requiredLetterPositions: newPositions,
				lettersStatus: newLettersStatus,
			};
		});
	};

	const reset = () => {
		setState(initialState);
		if (typeof document !== 'undefined') {
			document.querySelectorAll('input').forEach((input: HTMLInputElement) => input.blur());
		}
	};

	useKeyboardReset(reset);

	const value = {
		...state,
		filteredWords,
		requiredLetters,
		nonNullLettersCount,
		handleLettersStatusChange,
		handleRequiredLetterPositionChange,
		reset,
	};

	return <OrdlerContext.Provider value={value}>{children}</OrdlerContext.Provider>;
}

export function useOrdler() {
	const context = useContext(OrdlerContext);
	if (context === undefined) {
		throw new Error('useOrdler must be used within an OrdlerContextProvider');
	}
	return context;
}
