import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@interfaces': path.resolve(__dirname, './src/interface'),
			'@constants': path.resolve(__dirname, './src/constant'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
});
