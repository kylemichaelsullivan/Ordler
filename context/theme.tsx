import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useColorScheme, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeContextType = {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_PREFERENCE_KEY = '@theme_preference';

type ThemeProviderProps = {
	children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
	const systemColorScheme = useColorScheme();
	const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
		if (Platform.OS === 'web') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		return systemColorScheme === 'dark';
	});

	useEffect(() => {
		async function loadThemePreference() {
			try {
				const savedPreference = await AsyncStorage.getItem(THEME_PREFERENCE_KEY);
				if (savedPreference !== null) {
					setIsDarkMode(savedPreference === 'dark');
				}
			} catch (error) {
				console.error('Error loading theme preference:', error);
			}
		}
		loadThemePreference();
	}, []);

	useEffect(() => {
		async function checkSavedPreference() {
			const savedPreference = await AsyncStorage.getItem(THEME_PREFERENCE_KEY);
			if (savedPreference === null) {
				setIsDarkMode(systemColorScheme === 'dark');
			}
		}
		checkSavedPreference();
	}, [systemColorScheme]);

	// Listen for system preference changes on web
	useEffect(() => {
		if (Platform.OS === 'web') {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			const handleChange = async () => {
				const savedPreference = await AsyncStorage.getItem(THEME_PREFERENCE_KEY);
				if (savedPreference === null) {
					setIsDarkMode(mediaQuery.matches);
				}
			};

			mediaQuery.addEventListener('change', handleChange);
			return () => mediaQuery.removeEventListener('change', handleChange);
		}
	}, []);

	// Apply dark mode class and color scheme
	useEffect(() => {
		if (Platform.OS === 'web') {
			document.documentElement.classList.remove('light', 'dark');

			document.documentElement.classList.add(isDarkMode ? 'dark' : 'light');

			// Set the color scheme for the browser
			document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';

			// Set meta theme-color for mobile browsers
			const metaThemeColor = document.querySelector('meta[name="theme-color"]');
			if (metaThemeColor) {
				metaThemeColor.setAttribute('content', isDarkMode ? '#111827' : '#f3f4f6');
			}
		}
	}, [isDarkMode]);

	const toggleDarkMode = async () => {
		const newIsDarkMode = !isDarkMode;
		setIsDarkMode(newIsDarkMode);
		try {
			await AsyncStorage.setItem(THEME_PREFERENCE_KEY, newIsDarkMode ? 'dark' : 'light');
		} catch (error) {
			console.error('Error saving theme preference:', error);
		}
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
