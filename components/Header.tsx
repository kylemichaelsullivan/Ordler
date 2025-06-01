import { View, Text } from 'react-native';

import Reset from '@/components/Reset';
import DarkMode from '@/components/DarkMode';

const Header = () => {
	return (
		<View className='Header has-light-background-color has-dark-border-color flex flex-row items-center justify-between border-b p-4'>
			<Reset />
			<Text className='flex-1 text-center text-2xl font-bold has-black-color sm:text-4xl'>
				Ordler
			</Text>
			<DarkMode />
		</View>
	);
};

export default Header;
