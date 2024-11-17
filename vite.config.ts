import path from 'path';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./setup.ts']
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	server: {
		host: true,
		port: 5173,
		watch: {
			usePolling: true,
			interval: 500
		}
	}
});
