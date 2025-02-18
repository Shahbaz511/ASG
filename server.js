const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

console.log('Server starting...');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submissions
app.post('/api/applications', (req, res) => {
    try {
        // Placeholder for application handling logic
        console.log('Application data received:', req.body);
        res.status(200).json({ message: 'Application saved successfully' });
    } catch (error) {
        console.error('Error saving application:', error);
        res.status(500).json({ error: 'Failed to save application' });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log('=================================');
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('=================================');
}); 