import { View, Text } from 'react-native';
import { Letter as LetterType } from '../types/ordler';
import LetterButtonDown from './LetterButtonDown';
import LetterButtonUp from './LetterButtonUp';
import { useOrdle } from '../context';

type LetterProps = {
  letter: LetterType;
};

export default function Letter({ letter }: LetterProps) {
  const { lettersStatus } = useOrdle();
  const status = lettersStatus[letter];

  return (
    <View className="flex-row items-center gap-1">
      <LetterButtonDown letter={letter} status={status} />
      <Text className="text-white text-lg font-bold">
        {letter.toUpperCase()}
      </Text>
      <LetterButtonUp letter={letter} status={status} />
    </View>
  );
}
