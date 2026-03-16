const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer'); // NEW
const bodyParser = require('body-parser'); // NEW

const app = express();
const port = 3000;

// Middleware to parse request bodies (NEW)
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // For parsing application/json

// Serve static files from the current directory (EXISTING)
app.use(express.static(__dirname));

// --- Nodemailer setup --- (NEW)
// Configure your email transporter
// IMPORTANT: Replace with your actual email service details.
// For Gmail, you MUST use an App Password for security: https://support.google.com/accounts/answer/185833
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' for Gmail. For other services like Outlook/Yahoo, you might need 'host' and 'port' options.
    auth: {
        user: 'neovantix@gmail.com', // <--- REPLACE THIS: The email address NODEMAILER WILL LOG INTO TO SEND EMAILS
        pass: 'Lohar098#' // <--- REPLACE THIS: The password for that email (or your Gmail App Password)
    }
});
// --- End Nodemailer setup ---

// --- New API Endpoint for Contact Form --- (NEW)
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body; // Extract data from the request body

    // Basic server-side validation
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All form fields are required.' });
    }

    const mailOptions = {
        from: 'neovantix@gmail.com', // <--- REPLACE THIS: The email address that will appear as the sender TO YOU (can be the same as auth.user)
        to: 'neovantix@gmail.com', // <--- REPLACE THIS: The email address where YOU want to RECEIVE the messages
        subject: `New Contact Form Message from ${name} (${email})`, // Improved subject line
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // This will show up in your CMD
            return res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
        }
        console.log('Email sent:', info.response); // This will show up in your CMD if successful
        res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
    });
});
// --- End New API Endpoint ---

// Serve index.html for the root path (EXISTING)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server (EXISTING)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Serving files from:', __dirname);
});