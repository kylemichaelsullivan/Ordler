import { View, ScrollView } from 'react-native';

import Letters from '@components/Letters';
import Word from '@components/Word';
import Results from '@components/Results';

const Body = () => {
	return (
		<ScrollView className='w-full flex-1 bg-background'>
			<View className='bg-background/5 min-h-[calc(100vh-8rem)] w-full flex-1 gap-6 p-4'>
				<Letters />
				<Word />
				<Results />
			</View>
		</ScrollView>
	);
};

export default Body;
