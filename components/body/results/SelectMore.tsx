import { View, Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const SelectMore = () => (
	<View className='SelectMore has-black-color has-dark-fill flex-row flex-1 items-center justify-center gap-2'>
		<Text className='text-center'>Select 2 or More</Text>
		<View className='flex-row items-center gap-2'>
			<FontAwesomeIcon icon={faThumbsUp} color='currentColor' />
			<Text>or</Text>
			<FontAwesomeIcon icon={faThumbsDown} color='currentColor' />
		</View>
	</View>
);

export default SelectMore;
