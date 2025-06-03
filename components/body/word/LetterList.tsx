import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

type LetterListProps = {
	letters: string[];
	onSelectLetter: (letter: string) => void;
};

const LetterList = ({ letters = [], onSelectLetter }: LetterListProps) => {
	if (!letters?.length) return null;

	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-2'>
			<View className='flex-row gap-2 px-2'>
				{letters.map(letter => (
					<TouchableOpacity
						key={letter}
						onPress={() => onSelectLetter(letter)}
						className='bg-white border border-gray-300 rounded-full w-10 h-10 items-center justify-center'
					>
						<Text className='has-black-color text-lg font-bold'>{letter.toUpperCase()}</Text>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	);
};

export default LetterList;
