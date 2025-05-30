import { TouchableOpacity, Alert, Platform } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@context/theme';

export default function Reset() {
	const { theme } = useTheme();
	const handlePress = () => {
		if (Platform.OS === 'web') {
			window.alert('Test Alert\nThis is a test message');
		} else {
			Alert.alert('Test Alert', 'This is a test message');
		}
	};

	return (
		<TouchableOpacity
			className="Reset p-2"
			onPress={handlePress}
			activeOpacity={0.7}
		>
			<FontAwesomeIcon
				icon={faSync}
				color={theme === 'light' ? '#111827' : '#f3f4f6'}
				size={16}
			/>
		</TouchableOpacity>
	);
}
