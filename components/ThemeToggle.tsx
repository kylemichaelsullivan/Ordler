import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '@context/theme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Pressable onPress={toggleTheme} className="p-2 text-foreground">
      <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} size={16} />
    </Pressable>
  );
}
