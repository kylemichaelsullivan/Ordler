import { View, Text } from 'react-native';

import Reset from '@/components/Reset';
import ThemeToggle from '@components/ThemeToggle';

const Header = () => {
	return (
		<View className='Header bg-background/5 flex flex-row items-center justify-between p-4'>
			<Reset />
			<Text className='flex-1 text-center text-2xl font-bold text-foreground'>Ordler</Text>
			<ThemeToggle />
		</View>
	);
};

export default Header;
