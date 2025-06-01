import { Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const SelectMore = () => (
	<Text className='SelectMore has-black-color flex-1 items-center justify-center'>
		Select 2 or More <FontAwesomeIcon icon={faThumbsUp} /> or{' '}
		<FontAwesomeIcon icon={faThumbsDown} />
	</Text>
);

export default SelectMore;
