type ResultProps = {
	word: string;
};

const Result = ({ word }: ResultProps) => {
	return <li className='Result'>{word}</li>;
};

export default Result;
