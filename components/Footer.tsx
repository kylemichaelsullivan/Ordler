import { View } from 'react-native';

import Copyright from '@components/Copyright';
import Reset from '@components/Reset';

export default function Footer() {
  return (
    <View className="flex flex-col items-center justify-center bg-background/5 p-4 sm:flex-row sm:justify-between">
      <Copyright />
      <Reset />
    </View>
  );
}
