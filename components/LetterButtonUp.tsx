import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { useOrdle } from '@context/ordler';

import type { Letter, Status } from '@/types/ordler';

type LetterButtonUpProps = {
  letter: Letter;
  status: Status;
};

export default function LetterButtonUp({
  letter,
  status,
}: LetterButtonUpProps) {
  const { handleLettersStatusChange } = useOrdle();
  const handlePress = () => handleLettersStatusChange(letter, 1);

  const statusColor =
    status === 1
      ? 'text-green-400'
      : status === 0
        ? 'text-foreground'
        : 'text-foreground';

  return (
    <Pressable onPress={handlePress} className={`p-2 ${statusColor}`}>
      <FontAwesomeIcon icon={faThumbsUp} size={16} />
    </Pressable>
  );
}
