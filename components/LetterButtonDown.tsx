import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { useOrdler } from '@context/ordler';

import type { LetterButtonProps } from '@/types/ordler';

const LetterButtonDown = ({ letter, status }: LetterButtonProps) => {
	const { handleLettersStatusChange } = useOrdler();
	const handlePress = () => handleLettersStatusChange(letter, 0);

	const statusColor =
		status === 0 ? 'text-red-400'
		: status === 1 ? 'text-foreground'
		: 'text-foreground';

	return (
		<Pressable onPress={handlePress} className={`p-2 ${statusColor}`}>
			<FontAwesomeIcon icon={faThumbsDown} size={16} />
		</Pressable>
	);
};

export default LetterButtonDown;
