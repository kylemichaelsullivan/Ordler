import { Text } from 'react-native';

function Copyright() {
	const currentYear = new Date().getFullYear();
	return <Text className="text-center font-bold text-foreground">Ordler © {currentYear}</Text>;
}

export default Copyright;
