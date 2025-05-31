import { Text } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const SelectMore = () => (
	<Text className='flex-1 items-center justify-center text-foreground'>
		Select 2 or More <FontAwesomeIcon icon={faThumbsUp} /> or{' '}
		<FontAwesomeIcon icon={faThumbsDown} />
	</Text>
);

export default SelectMore;
