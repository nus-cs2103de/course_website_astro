// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CS2103DE: Software Engineering',
			description: 'A balanced, iterative, and brownfield introduction to Software Engineering',
			favicon: '/favicon.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/nus-cs2103-AY2526S2' }
			],
			customCss: [
				'./src/styles/cs2103-theme.css',
				'./src/styles/custom.css',
			],
			components: {
				Banner: './src/components/CustomBanner.astro',
			},
			sidebar: [
				{
					label: 'Course Information',
					items: [
						{ label: 'Course Overview', slug: 'index' },
						{ label: 'Course Expectations', slug: 'admin/expectations' },
						{ label: 'Course Structure', slug: 'admin/structure' },
						{ label: 'Instructors', slug: 'admin/instructors' },
					],
				},
				{
					label: 'Weekly Schedule',
					items: [
						{ label: 'Week 1 - Introduction', slug: 'schedule/week1' },
						{ label: 'Week 2 - Tools', slug: 'schedule/week2' },
						{ label: 'Week 3 - Java, Unit Testing', slug: 'schedule/week3' },
					],
				},
				{
					label: 'Resources',
					items: [
						{ label: 'Textbook', slug: 'textbook' },
					],
				},
			],
		}),
	],
});
