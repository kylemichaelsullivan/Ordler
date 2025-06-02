import { View } from 'react-native';

import Copyright from './Copyright';
import Reset from '@/components/buttons/Reset';

const Footer = () => {
	return (
		<View className='Footer has-light-background-color has-dark-border-color flex flex-row items-center justify-between border-t p-4'>
			<Copyright />
			<Reset />
		</View>
	);
};

export default Footer;
