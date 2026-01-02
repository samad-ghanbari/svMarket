import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 3000,
		proxy: {
			'/api': 'http://localhost:4000'
		}
	}
});

/*
export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		host: 'localhost',
		port: 3000,
		proxy: {
			'/api': 'http://localhost:4000'
		}
	}
});
*/
