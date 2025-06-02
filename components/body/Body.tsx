import { ScrollView, View } from 'react-native';

import Letters from './letters/Letters';
import Word from './word/Word';
import Results from './results/Results';

const Body = () => {
	return (
		<ScrollView className='Body flex-1'>
			<View className='has-white-background-color flex-1 w-full gap-6 p-4'>
				<Letters />
				<Word />
				<Results />
			</View>
		</ScrollView>
	);
};

export default Body;
