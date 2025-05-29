import { Text } from 'react-native';

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <Text className="text-foreground font-bold text-center">
      Ordler © {currentYear}
    </Text>
  );
}

export default Copyright;
