import { View, Text } from 'react-native';

export default function NoResults() {
	return (
		<View className="flex-1 items-center justify-center">
			<Text className="dark:text-foreground-dark text-foreground">No words found</Text>
		</View>
	);
}
