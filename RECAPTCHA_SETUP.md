# reCAPTCHA Setup Guide

## Getting Started with reCAPTCHA

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" to register a new site
3. Choose "reCAPTCHA v2" with "I'm not a robot" checkbox
4. Add your domain (for development, use `localhost`)
5. Accept the terms and click "Submit"
6. Copy your **Site Key** and **Secret Key**

### 2. Configure Environment Variables

Create a `.env` file in your project root with:

```env
# Discord Webhook URL
VITE_DISCORD_WEBHOOK_URL=your_discord_webhook_url_here

# Google reCAPTCHA Configuration
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
VITE_RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
```

### 3. Update the Contact Component

Replace the placeholder site key in `src/pages/Contact/contact.jsx`:

```javascript
// Replace this line:
script.src = 'https://www.google.com/recaptcha/api.js?render=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

// With this:
script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
```

And update the reCAPTCHA div:

```javascript
// Replace this:
data-sitekey="6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

// With this:
data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
```

### 4. Backend Verification (Production)

For production, you'll need a backend API to verify the reCAPTCHA token. Here's an example:

```javascript
// Backend API endpoint (Node.js/Express example)
app.post('/api/verify-recaptcha', async (req, res) => {
    const { token } = req.body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${secretKey}&response=${token}`
        });
        
        const data = await response.json();
        res.json({ success: data.success, score: data.score });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});
```

### 5. Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out the form and check the reCAPTCHA box
4. Submit the form
5. Check the browser console for reCAPTCHA token logs

### Security Notes

- Never expose your reCAPTCHA secret key in frontend code
- Always verify reCAPTCHA tokens on the backend
- Use environment variables for sensitive configuration
- Consider rate limiting for form submissions

### Troubleshooting

- **reCAPTCHA not loading**: Check your site key and domain configuration
- **Verification failing**: Ensure your secret key is correct
- **CORS errors**: Make sure your backend allows requests from your frontend domain
