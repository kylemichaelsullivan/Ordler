import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '@context/theme';

const DarkMode = () => {
	const { isDarkMode, toggleDarkMode } = useTheme();

	return (
		<Pressable
			onPress={toggleDarkMode}
			className='DarkMode has-black-fill p-2'
			style={({ pressed }) => [
				{
					cursor: 'pointer',
					padding: 8,
					opacity: pressed ? 0.7 : 1,
					touchAction: 'manipulation',
				},
			]}
		>
			<FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} color='currentColor' size={16} />
		</Pressable>
	);
};

export default DarkMode;
