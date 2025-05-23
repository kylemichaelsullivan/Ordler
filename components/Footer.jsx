import { View } from 'react-native';

import Copyright from './Copyright';
import Reset from './Reset';

export default function Footer() {
  return (
    <View className="flex flex-col items-center justify-center bg-background/5 p-4 sm:flex-row sm:justify-between">
      <Copyright />
      <Reset />
    </View>
  );
}
