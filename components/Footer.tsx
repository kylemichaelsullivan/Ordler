import { View } from 'react-native';

import Copyright from '@components/Copyright';
import Reset from '@components/Reset';

const Footer = () => {
	return (
		<View className='bg-background/5 flex flex-col items-center justify-center p-4 sm:flex-row sm:justify-between'>
			<Copyright />
			<Reset />
		</View>
	);
};

export default Footer;
