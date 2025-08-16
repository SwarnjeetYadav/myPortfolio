import { verifyRecaptchaToken } from './recaptchaVerification.js';

export const sendToDiscord = async ({ name, email, subject, message, recaptchaToken }) => {
    // Validate reCAPTCHA token if provided
    if (recaptchaToken) {
        try {
            const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
            if (!recaptchaResult.success) {
                throw new Error('reCAPTCHA verification failed');
            }
        } catch (error) {
            console.error('reCAPTCHA verification error:', error);
            throw new Error('reCAPTCHA verification failed');
        }
    }

    const content = `**New Contact Form Submission**\n**Name:** ${name}\n**Email:** ${email}\n**Subject:** ${subject}\n**Message:** ${message}\n**reCAPTCHA:** ${recaptchaToken ? 'Verified' : 'Not provided'}`;
    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
        throw new Error('Discord webhook URL not configured');
    }

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
    });

    if (!response.ok) {
        throw new Error(`Discord webhook failed: ${response.status}`);
    }

    return response;
};
