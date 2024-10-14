/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.webmanifest$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: 'site.webmanifest',
						publicPath: '/_next',
						outputPath: 'static/media',
					},
				},
			],
		});
		return config;
	},
};

module.exports = nextConfig;
