import { View } from 'react-native';

import Letter from './Letter';

import { letters } from '@/types/ordler';

const Letters = () => {
	return (
		<View className='Letters grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 p-4'>
			{letters.map(letter => (
				<Letter key={letter} letter={letter} />
			))}
		</View>
	);
};

export default Letters;
