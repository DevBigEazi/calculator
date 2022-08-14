module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};