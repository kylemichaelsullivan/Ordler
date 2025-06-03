import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '@/context/theme';

const DarkMode = () => {
	const { isDarkMode, toggleDarkMode } = useTheme();

	return (
		<Pressable
			onPress={toggleDarkMode}
			className={`DarkMode has-yellow-fill p-2 cursor-pointer active:opacity-70`}
		>
			<FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} color='currentColor' size={16} />
		</Pressable>
	);
};

export default DarkMode;
