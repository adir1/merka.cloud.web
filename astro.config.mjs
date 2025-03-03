// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Logo Dall-E Prompt: Please create an SVG image of seed of life Merkabah and cloud, against shining light background

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Merka.Cloud',
			social: {
				github: 'https://github.com/worlddelights/merka.cloud',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Why Merka?', slug: 'guides/why_merka' },
						{ label: 'Get Started!', slug: 'guides/setup' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
