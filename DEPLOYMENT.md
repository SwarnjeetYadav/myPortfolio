# Deployment Guide

This guide will help you deploy your portfolio to various hosting platforms.

## 🚀 GitHub Pages Deployment

### 1. Update Vite Config for GitHub Pages

Update your `vite.config.js` to include the base path:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your repository name
})
```

### 2. Add GitHub Pages Script

Add this script to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

### 5. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

Your site will be available at: `https://swarnjeetyadav.github.io/portfolio/`

## 🌐 Netlify Deployment

### Option 1: Drag & Drop

1. Run `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag the `dist` folder to the deployment area
4. Your site will be live instantly

### Option 2: Git Integration

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

## 🔥 Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Your site will be deployed instantly

## 📝 Environment Variables

For production deployment, make sure to set up your environment variables:

### GitHub Pages
- Add environment variables in your hosting platform's settings
- For reCAPTCHA and Discord webhook

### Netlify
- Go to Site Settings > Environment Variables
- Add your environment variables

### Vercel
- Go to Project Settings > Environment Variables
- Add your environment variables

## 🔧 Post-Deployment Checklist

- [ ] Test all pages work correctly
- [ ] Verify contact form functionality
- [ ] Check gallery images load properly
- [ ] Test responsive design on mobile
- [ ] Verify all links work
- [ ] Check console for any errors
- [ ] Test reCAPTCHA integration
- [ ] Verify Discord webhook (if configured)

## 🐛 Troubleshooting

### Common Issues:

1. **Images not loading**: Check if image paths are correct
2. **404 errors**: Ensure base path is set correctly in vite.config.js
3. **Environment variables not working**: Check if they're set in hosting platform
4. **Build failures**: Check for any import errors or missing dependencies

### Debug Steps:

1. Check browser console for errors
2. Verify all dependencies are installed
3. Test locally with `npm run build` and `npm run preview`
4. Check network tab for failed requests

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all configuration files are correct
3. Test the build locally before deploying
4. Check hosting platform documentation

---

Your portfolio is now ready for deployment! 🎉
