import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';
import dotenv from "dotenv"
dotenv.config();

const ApiUrl = process.env.VITE_API_URL;
const MediaUrl = process.env.VITE_MEDIA_URL

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server:{
		headers:{
			"X-Frame-Option": "SAMEORIGIN",
			"SameSite": "Strict"
		},
		proxy:{
			'/api':{
				// target:"https://manage.signupcasuals.com:8443/api/",
				target: ApiUrl,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
			'/media':{
				target: MediaUrl,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/media/, '')
			}
		},
	}
});
