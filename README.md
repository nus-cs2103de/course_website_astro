# CS2103DE Course Website (Astro Starlight)

This is a proof of concept course website for CS2103DE Software Engineering built with Astro Starlight. The project shows how the CS2103DE course content can be presented using a modern documentation framework that focuses on speed and simplicity.

## Live Demo

You can view the deployed website at https://zikun-cs2103de-course-website-astro.vercel.app/

## Technology Stack

This project uses the following technologies.

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 5.6.1 | Fast static site generator |
| Starlight | 0.34.4 | Documentation theme for Astro |
| Sharp | 0.34.2 | Image processing |

Astro Starlight is designed specifically for documentation websites. It provides built in features like automatic navigation, search, dark mode, and mobile responsiveness without requiring additional configuration.

## Getting Started

### Prerequisites

Before you begin, make sure you have Node.js version 18 or higher installed on your computer. You can check your Node.js version by running `node --version` in your terminal.

### Clone the Repository

First, clone the repository from GitHub and set up the remote.

```bash
git clone https://github.com/nus-cs2103de/course_website_astro.git
cd course_website_astro
```

If you already have the project folder, you can add the remote manually.

```bash
git remote add origin https://github.com/nus-cs2103de/course_website_astro.git
```

### Install Dependencies

Run the following command to install all required packages.

```bash
npm install
```

### Run the Development Server

Start the local development server with the following command.

```bash
npm run dev
```

This will start the server at http://localhost:4321/ where you can see the website. Any changes you make to the files will be reflected immediately without restarting the server.

### Build for Production

When you are ready to deploy, create a production build with the following command.

```bash
npm run build
```

The output will be in the `dist` folder. You can preview the production build locally by running `npm run preview`.

## Project Structure

Here is an overview of the important files and folders in this project.

```
course_website_astro/
├── src/
│   ├── content/
│   │   └── docs/           Content pages written in Markdown and MDX
│   │       ├── index.mdx   Homepage content
│   │       ├── admin/      Administrative information pages
│   │       │   ├── expectations.md
│   │       │   ├── instructors.md
│   │       │   └── structure.md
│   │       ├── schedule/   Weekly schedule pages
│   │       │   ├── week1.mdx
│   │       │   ├── week2.mdx
│   │       │   └── week3.mdx
│   │       └── textbook.md Textbook placeholder
│   ├── components/         Custom Astro components
│   │   ├── AnnouncementBanner.astro
│   │   ├── CustomBanner.astro
│   │   └── WeekNavigation.astro
│   ├── styles/             Custom CSS files
│   │   ├── cs2103-theme.css
│   │   └── custom.css
│   └── content.config.ts   Content collection configuration
├── public/                 Static assets like images
├── astro.config.mjs        Main site configuration
├── package.json            Project dependencies
└── tsconfig.json           TypeScript configuration
```

## Adding Content

### Creating a New Week Page

To add a new week page, create a new MDX file inside `src/content/docs/schedule/` with the week number.

For example, to add Week 4, create `src/content/docs/schedule/week4.mdx` with the following frontmatter at the top of the file.

```markdown
---
title: Week 4
description: Brief description of the week content
---

import WeekNavigation from '../../components/WeekNavigation.astro';

<WeekNavigation previousWeek="3" nextWeek="5" />

Your content goes here...

<WeekNavigation previousWeek="3" nextWeek="5" />
```

You will also need to update the sidebar configuration in `astro.config.mjs` to include the new week in the navigation.

### Modifying Existing Content

All content pages are in the `src/content/docs/` folder. Simply edit the Markdown or MDX files and save. The development server will automatically reload with your changes.

### Updating the Sidebar

The sidebar navigation is configured in `astro.config.mjs`. Look for the `sidebar` array inside the `starlight` configuration. Each item in the array represents a navigation group or link.

```javascript
sidebar: [
  {
    label: 'Schedule',
    items: [
      { label: 'Week 1', slug: 'schedule/week1' },
      { label: 'Week 2', slug: 'schedule/week2' },
      // Add new weeks here
    ],
  },
]
```

## Customization

### Changing Colors and Styles

The theme colors are defined in two files inside `src/styles/`.

The `cs2103-theme.css` file contains the primary theme colors and sidebar badge styles. You can modify the CSS custom properties to change the color scheme.

The `custom.css` file contains additional style overrides for dark mode, tables, and other elements.

### Adding Custom Components

Astro components are created as `.astro` files in the `src/components/` folder. These components can include HTML, CSS, and JavaScript in a single file.

To use a component in your content pages, import it at the top of your MDX file.

```markdown
---
title: Your Page Title
---

import YourComponent from '../../components/YourComponent.astro';

<YourComponent />
```

### Modifying Announcement Banners

The announcement banners are Astro components located in `src/components/`. Edit `AnnouncementBanner.astro` or `CustomBanner.astro` to change the banner messages or styles.

## Security Note

### CVE 2025 55182 React Server Components Vulnerability

In December 2025, a critical security vulnerability was disclosed in React Server Components (CVE 2025 55182). This vulnerability affects the `react-server-dom-webpack`, `react-server-dom-parcel`, and `react-server-dom-turbopack` packages.

**This project is NOT affected by this vulnerability.**

Astro Starlight does not use React. It is built on Astro which uses its own component format. There are no React dependencies in this project and no React Server Components.

If you are using other React frameworks or projects that do use React Server Components, please check the official React blog at https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components for detailed upgrade instructions.

## Deployment

This project is currently deployed on Vercel. The deployment happens automatically when changes are pushed to the main branch.

To deploy to your own Vercel account, you can import the repository directly from the Vercel dashboard at https://vercel.com/new and select the GitHub repository.

For other hosting options, you can deploy the contents of the `dist` folder to any static hosting service like GitHub Pages, Netlify, or a traditional web server.

## Why Astro Starlight

Astro Starlight was chosen for this proof of concept because of several advantages.

**Performance.** Astro generates minimal JavaScript by default which results in faster page loads.

**Simplicity.** Starlight provides documentation features out of the box without needing to configure plugins or write custom code.

**Content Focus.** The framework is designed around content first principles which makes it easy to focus on writing documentation rather than configuring the site.

**Built in Features.** Search, dark mode, mobile responsiveness, and automatic navigation are included without additional setup.

## Contributing

If you would like to contribute to this project, please follow these guidelines.

1. Create a new branch for your changes
2. Make your changes and test them locally
3. Ensure the build completes without errors by running `npm run build`
4. Submit a pull request with a clear description of your changes

## License

This project is for NUS internal use only. All rights reserved by the National University of Singapore.
