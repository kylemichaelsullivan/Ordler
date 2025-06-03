import { View, Text } from 'react-native';

type ResultProps = {
	word: string;
};

const Result = ({ word }: ResultProps) => {
	return <Text className='has-black-color'>{word}</Text>;
};

export default Result;
