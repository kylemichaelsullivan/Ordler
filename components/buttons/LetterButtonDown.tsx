import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { useOrdler } from '@/context/ordler';

import type { LetterButtonProps } from '@/types/ordler';

const LetterButtonDown = ({ letter, status }: LetterButtonProps) => {
	const { handleLettersStatusChange } = useOrdler();
	const handlePress = () => handleLettersStatusChange(letter, 0);

	const statusColor = status === 0 ? 'has-red-fill' : 'has-dark-fill';

	return (
		<Pressable onPress={handlePress} className={`LetterButtonDown ${statusColor} p-2`}>
			<FontAwesomeIcon icon={faThumbsDown} color='currentColor' size={16} />
		</Pressable>
	);
};

export default LetterButtonDown;
