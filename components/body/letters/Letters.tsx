import { memo } from 'react';
import { FlatList, View, useWindowDimensions } from 'react-native';

import Letter from './Letter';

import { letters, type Letter as LetterType } from '@/types/ordler';

const Letters = memo(() => {
	const { width } = useWindowDimensions();
	const numColumns =
		width < 350 ? 2
		: width < 475 ? 3
		: width < 575 ? 4
		: width < 700 ? 5
		: width < 800 ? 6
		: 7;

	const renderItem = ({ item: letter }: { item: LetterType }) => <Letter letter={letter} />;

	return (
		<View className='Letters w-full'>
			<FlatList
				key={numColumns}
				data={letters}
				renderItem={renderItem}
				keyExtractor={item => item}
				numColumns={numColumns}
				className='w-full'
				contentContainerStyle={{
					gap: 16,
				}}
				columnWrapperStyle={{
					gap: 16,
					justifyContent: 'center',
				}}
				showsVerticalScrollIndicator={false}
				initialNumToRender={10}
				maxToRenderPerBatch={10}
				windowSize={5}
			/>
		</View>
	);
});

export default Letters;
