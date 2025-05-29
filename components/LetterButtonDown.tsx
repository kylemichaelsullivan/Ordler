import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { useOrdle } from '@context/ordler';

import type { Letter, Status } from '@/types/ordler';

type LetterButtonDownProps = {
  letter: Letter;
  status: Status;
};

export default function LetterButtonDown({
  letter,
  status,
}: LetterButtonDownProps) {
  const { handleLettersStatusChange } = useOrdle();
  const handlePress = () => handleLettersStatusChange(letter, 0);

  const statusColor =
    status === 0
      ? 'text-red-400'
      : status === 1
        ? 'text-foreground'
        : 'text-foreground';

  return (
    <Pressable onPress={handlePress} className={`p-2 ${statusColor}`}>
      <FontAwesomeIcon icon={faThumbsDown} size={16} />
    </Pressable>
  );
}
