import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';

type Theme = 'light' | 'dark';

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
	children: ReactNode;
};

const useThemePersistence = () => {
	const [theme, setTheme] = useState<Theme>('light');
	const systemColorScheme = useColorScheme();

	useEffect(() => {
		const loadTheme = () => {
			try {
				if (typeof window !== 'undefined') {
					const savedTheme = localStorage.getItem('theme') as Theme | null;
					if (savedTheme) {
						setTheme(savedTheme);
						document.documentElement.classList.add(savedTheme);
					} else {
						const systemTheme = systemColorScheme === 'dark' ? 'dark' : 'light';
						setTheme(systemTheme);
						document.documentElement.classList.add(systemTheme);
					}
				} else {
					const systemTheme = systemColorScheme === 'dark' ? 'dark' : 'light';
					setTheme(systemTheme);
				}
			} catch (error) {
				console.error('Error loading theme:', error);
				const systemTheme = systemColorScheme === 'dark' ? 'dark' : 'light';
				setTheme(systemTheme);
			}
		};

		loadTheme();
	}, [systemColorScheme]);

	const persistTheme = (newTheme: Theme) => {
		try {
			if (typeof window !== 'undefined') {
				localStorage.setItem('theme', newTheme);
				document.documentElement.classList.remove(theme);
				document.documentElement.classList.add(newTheme);
			}
		} catch (error) {
			console.error('Error saving theme:', error);
		}
	};

	return { theme, setTheme, persistTheme };
};

export function ThemeProvider({ children }: ThemeProviderProps) {
	const { theme, setTheme, persistTheme } = useThemePersistence();

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		persistTheme(newTheme);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}
