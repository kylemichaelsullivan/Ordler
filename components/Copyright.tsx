import { Text } from 'react-native';

const Copyright = () => (
	<Text className='text-center font-bold text-foreground'>
		Ordler © {new Date().getFullYear()}
	</Text>
);

export default Copyright;
