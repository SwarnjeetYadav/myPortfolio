# Swarnjeet Kumar Yadav - Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Beautiful design with smooth animations and transitions
- **Interactive Gallery**: Photo gallery with lightbox effect and category filtering
- **Contact Form**: Functional contact form with reCAPTCHA integration
- **Navigation**: Smooth scrolling and sidebar navigation
- **Portfolio Showcase**: Project portfolio with filtering capabilities
- **Skills Display**: Interactive skills section with progress indicators

## 🛠️ Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing
- **reCAPTCHA** - Form spam protection

## 📁 Project Structure

```
src/
├── pages/
│   ├── Home/          # Home page component
│   ├── About/         # About page component
│   ├── Skills/        # Skills page component
│   ├── Portfolio/     # Portfolio page component
│   ├── Contact/       # Contact page component
│   ├── Gallery/       # Photo gallery component
│   └── sidebar.jsx    # Navigation sidebar
├── services/          # API services and utilities
├── assets/           # Static assets (images, etc.)
└── components/       # Reusable components
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/SwarnjeetYadav/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for sensitive configuration:

```env
VITE_DISCORD_WEBHOOK_URL=your_discord_webhook_url
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
VITE_RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

### Gallery Configuration

To add photos to the gallery:
1. Place images in `src/pages/Gallery/GalleryImages/`
2. Update `src/pages/Gallery/galleryConfig.js` with image details

## 📱 Pages

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal information and background
- **Skills**: Technical skills with progress indicators
- **Portfolio**: Project showcase with filtering
- **Contact**: Contact form with reCAPTCHA
- **Gallery**: Personal photo gallery with lightbox

## 🎨 Customization

- Update personal information in respective page components
- Modify colors in `tailwind.config.js`
- Add new pages by updating `App.jsx` routing
- Customize gallery categories in `galleryConfig.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

- **Name**: Swarnjeet Kumar Yadav
- **Email**: swarnjeet.yadav@example.com
- **GitHub**: [@SwarnjeetYadav](https://github.com/SwarnjeetYadav)

---

Built with ❤️ using React and Tailwind CSS
