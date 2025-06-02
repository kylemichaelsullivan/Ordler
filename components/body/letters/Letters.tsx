import { View } from 'react-native';

import Letter from './Letter';

import { letters } from '@/types/ordler';

const Letters = () => {
	return (
		<View className='Letters flex flex-row flex-wrap gap-2'>
			{letters.map(letter => (
				<Letter key={letter} letter={letter} />
			))}
		</View>
	);
};

export default Letters;
