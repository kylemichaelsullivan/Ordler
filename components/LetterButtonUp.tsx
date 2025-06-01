import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { useOrdler } from '@context/ordler';

import type { LetterButtonProps } from '@/types/ordler';

const LetterButtonUp = ({ letter, status }: LetterButtonProps) => {
	const { handleLettersStatusChange } = useOrdler();
	const handlePress = () => handleLettersStatusChange(letter, 1);

	const statusColor = status === 1 ? 'has-green-fill' : 'has-dark-fill';

	return (
		<Pressable onPress={handlePress} className={`LetterButtonUp ${statusColor} p-2`}>
			<FontAwesomeIcon icon={faThumbsUp} color='currentColor' size={16} />
		</Pressable>
	);
};

export default LetterButtonUp;
