import { Pressable } from 'react-native';
import { useOrdle } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Letter, Status } from '../types/ordler';

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
        ? 'text-gray-100'
        : 'text-gray-400';

  return (
    <Pressable onPress={handlePress} className={`p-2 ${statusColor}`}>
      <FontAwesomeIcon icon={faThumbsDown} size={16} />
    </Pressable>
  );
}
