import { Pressable } from 'react-native';
import { useOrdle } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Letter, Status } from '../types/ordler';

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
        ? 'text-gray-100'
        : 'text-gray-400';

  return (
    <Pressable onPress={handlePress} className={`p-2 ${statusColor}`}>
      <FontAwesomeIcon icon={faThumbsUp} size={16} />
    </Pressable>
  );
}
