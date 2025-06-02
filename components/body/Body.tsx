import { ScrollView, View } from 'react-native';

import Letters from './letters/Letters';
import Word from './word/Word';
import Results from './results/Results';

const Body = () => {
	return (
		<ScrollView className='Body w-full flex-1'>
			<View className='has-white-background-color min-h-[calc(100vh-8rem)] w-full flex-1 gap-6 p-4'>
				<Letters />
				<Word />
				<Results />
			</View>
		</ScrollView>
	);
};

export default Body;
