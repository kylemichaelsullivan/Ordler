import { memo } from 'react';
import { View } from 'react-native';

import Letters from './letters/Letters';
import Word from './word/Word';
import Results from './results/Results';

const Body = memo(() => {
	return (
		<View className='Body has-white-background-color flex-1 w-full gap-6 px-2 py-4'>
			<Letters />
			<Word />
			<Results />
		</View>
	);
});

export default Body;
