import { defineConfig } from 'astro/config';

// Detecta si estamos corriendo en GitHub Actions
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://CAIS-Official.github.io',
  // En GitHub usa '/studio/', en local usa '/'
  base: isGitHubPages ? '/studio/' : '/', 
  i18n: {
    defaultLocale: 'en', 
    locales: ['en', 'es'], 
    routing: {
      prefixDefaultLocale: true, 
      redirectToDefaultLocale: false, 
    },
  },
});