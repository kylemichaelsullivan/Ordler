import { TouchableOpacity, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

export default function Reset() {
  const handlePress = () => {
    Alert.alert('Ordler');
  };

  return (
    <TouchableOpacity
      className="Reset"
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <FontAwesomeIcon icon={faSync} color="white" size={16} />
    </TouchableOpacity>
  );
}
