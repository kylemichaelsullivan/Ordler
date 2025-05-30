import { View, Text } from 'react-native';

import Reset from '@/components/Reset';
import ThemeToggle from '@components/ThemeToggle';

export default function Header() {
	return (
		<View
			className="Header bg-background/5 flex flex-row items-center justify-between p-4"
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: 16,
				backgroundColor: 'rgba(var(--background), 0.05)',
			}}
		>
			<Reset />
			<Text
				className="flex-1 text-center text-2xl font-bold text-foreground"
				style={{
					flex: 1,
					textAlign: 'center',
					fontSize: 24,
					fontWeight: 'bold',
					color: 'var(--text)',
				}}
			>
				Ordler
			</Text>
			<ThemeToggle />
		</View>
	);
}
