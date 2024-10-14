/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	output: 'export',
	async headers() {
		return [
			{
				source: '/google523f418b1738107c.html',
				headers: [
					{
						key: 'Content-Type',
						value: 'text/html',
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
