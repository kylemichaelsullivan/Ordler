import { Text } from 'react-native';

const Copyright = () => (
	<Text className='Copyright has-black-color text-center font-bold'>
		Ordler © {new Date().getFullYear()}
	</Text>
);

export default Copyright;
