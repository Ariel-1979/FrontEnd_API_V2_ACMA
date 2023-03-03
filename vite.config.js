import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@Components': path.resolve(__dirname, './src/components'),
			'@Pages': path.resolve(__dirname, './src/pages'),
			'@Horses': path.resolve(__dirname, './src/pages/Horses'),
			'@Horse': path.resolve(__dirname, './src/pages/horses/pages')
		}
	}
});
