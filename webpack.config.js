const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
	const config = await createExpoWebpackConfigAsync(
		{
			...env,
			babel: {
				dangerouslyAddModulePathsToTranspile: ['nativewind'],
			},
		},
		argv
	);

	config.module.rules = config.module.rules.filter(
		rule => !(rule.test && rule.test.toString().includes('css'))
	);

	config.module.rules.push({
		test: /\.css$/i,
		use: [
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [
							'tailwindcss',
							'autoprefixer',
							['nativewind/postcss', { output: 'nativewind-output.js' }],
						],
					},
				},
			},
		],
	});

	config.resolve.extensions = ['.web.js', '.js', '.ts', '.tsx', '.web.tsx', '.web.ts', '.css'];

	return config;
};
