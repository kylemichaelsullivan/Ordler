import { TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import { useOrdler } from '@context/ordler';

const Reset = () => {
	const { reset } = useOrdler();

	return (
		<TouchableOpacity className='Reset has-black-fill p-2' onPress={reset} activeOpacity={0.7}>
			<FontAwesomeIcon icon={faSync} color='currentColor' size={16} />
		</TouchableOpacity>
	);
};

export default Reset;
