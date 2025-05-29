import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function SelectMore() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-foreground dark:text-foreground-dark">
        Select 2 or More <FontAwesomeIcon icon={faThumbsUp} /> or{' '}
        <FontAwesomeIcon icon={faThumbsDown} />
      </Text>
    </View>
  );
}
