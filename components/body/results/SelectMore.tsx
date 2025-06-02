import { Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const SelectMore = () => (
	<Text className='SelectMore has-black-color has-dark-fill flex-1 items-center justify-center text-center'>
		Select 2 or More <FontAwesomeIcon icon={faThumbsUp} color='currentColor' /> or{' '}
		<FontAwesomeIcon icon={faThumbsDown} color='currentColor' />
	</Text>
);

export default SelectMore;
