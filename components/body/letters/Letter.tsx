import { View, Text } from 'react-native';

import { useOrdler } from '@/context/ordler';

import LetterButtonDown from '@/components/buttons/LetterButtonDown';
import LetterButtonUp from '@/components/buttons/LetterButtonUp';

import type { Letter as LetterType } from '@/types/ordler';

type LetterProps = {
	letter: LetterType;
};

const Letter = ({ letter }: LetterProps) => {
	const { lettersStatus } = useOrdler();
	const status = lettersStatus[letter];

	return (
		<View className='Letter flex-row items-center gap-1'>
			<LetterButtonDown letter={letter} status={status} />
			<Text className='has-black-color text-lg font-bold'>{letter.toUpperCase()}</Text>
			<LetterButtonUp letter={letter} status={status} />
		</View>
	);
};

export default Letter;
