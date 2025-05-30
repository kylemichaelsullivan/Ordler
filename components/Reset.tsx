import { TouchableOpacity, Alert, Platform } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

export default function Reset() {
  const handlePress = () => {
    if (Platform.OS === 'web') {
      window.alert('Test Alert\nThis is a test message');
    } else {
      Alert.alert('Test Alert', 'This is a test message');
    }
  };

  return (
    <TouchableOpacity
      className="Reset"
      onPress={handlePress}
      activeOpacity={0.7}
      style={{
        padding: 8,
      }}
    >
      <FontAwesomeIcon icon={faSync} color="white" size={16} />
    </TouchableOpacity>
  );
}
