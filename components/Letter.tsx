import { View, Text } from 'react-native';

import { useOrdle } from '@context/ordler';

import LetterButtonDown from '@components/LetterButtonDown';
import LetterButtonUp from '@components/LetterButtonUp';

import type { Letter as LetterType } from '@/types/ordler';

type LetterProps = {
	letter: LetterType;
};

export default function Letter({ letter }: LetterProps) {
	const { lettersStatus } = useOrdle();
	const status = lettersStatus[letter];

	return (
		<View className="flex-row items-center gap-1">
			<LetterButtonDown
				letter={letter}
				status={status}
			/>
			<Text className="text-lg font-bold text-foreground">{letter.toUpperCase()}</Text>
			<LetterButtonUp
				letter={letter}
				status={status}
			/>
		</View>
	);
}
