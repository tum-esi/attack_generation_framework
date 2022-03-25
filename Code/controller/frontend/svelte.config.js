/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';
import { imagetools } from 'vite-imagetools';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			plugins: [imagetools({ force: true })],
		}
		// paths: {
		// 	assets: 'assets',
		// 	base: ''
		// },
	}
};

export default config;
