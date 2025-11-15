import adapter from '@sveltejs/adapter-node';
import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$types: path.resolve('./src/lib/types'),
			$backend: path.resolve('./backend'),
			$root: path.resolve('./'),
			$lib: path.resolve('./src/lib/'),
			$src: path.resolve('./src')
		}
	}
};

export default config;
