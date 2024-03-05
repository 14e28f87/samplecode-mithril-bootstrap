import { defineConfig } from "vite";


export default defineConfig({

	publicDir : "./www",
	
	resolve: {
		alias: {
			'~/': `${__dirname}/src/`,
		},
	},
	
	server: {
		port: 8080,
	},
	
	build: {
		manifest: true,
	},
	
	esbuild: {
		jsx: "transform",
		jsxFactory: "m",
		jsxFragment: "'['",
	},

	css: {

	},

});

