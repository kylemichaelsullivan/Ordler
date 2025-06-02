import '@assets/loading.css';

const Loading = () => (
	<div className='Loading mx-auto'>
		{Array.from({ length: 12 }, (_, i) => (
			<div key={i} />
		))}
	</div>
);

export default Loading;
