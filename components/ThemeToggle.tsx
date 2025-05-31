import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '@context/theme';

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Pressable
			onPress={toggleTheme}
			className='ThemeToggle p-2'
			style={({ pressed }) => [
				{
					cursor: 'pointer',
					padding: 8,
					opacity: pressed ? 0.7 : 1,
					touchAction: 'manipulation',
				},
			]}
		>
			<FontAwesomeIcon
				icon={theme === 'light' ? faSun : faMoon}
				size={16}
				color={theme === 'light' ? '#111827' : '#f3f4f6'}
			/>
		</Pressable>
	);
};

export default ThemeToggle;
