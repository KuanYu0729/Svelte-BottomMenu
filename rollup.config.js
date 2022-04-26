import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import css from 'rollup-plugin-css-only';
import { less } from 'svelte-preprocess-less';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.ts',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name }
	],
	plugins: [
		svelte({
			preprocess: [{
				style: less()
			}],
			compilerOptions: {
				dev: false
			}
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'index.css' }),
		resolve(),
		typescript({
			sourceMap: true,
			inlineSources: true
		}),
	]
};
