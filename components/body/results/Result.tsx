type ResultProps = {
	word: string;
};

const Result = ({ word }: ResultProps) => {
	return <li className='Result has-black-color'>{word}</li>;
};

export default Result;
