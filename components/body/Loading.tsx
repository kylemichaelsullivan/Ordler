import { View } from 'react-native';
import '@assets/loading.css';

const Loading = () => (
	<View className='Loading mx-auto'>
		{[...Array(12)].map((_, i) => (
			<View key={i} />
		))}
	</View>
);

export default Loading;
