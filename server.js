// Minimal server to serve API
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('.'));

// Handle CAPTCHA solve request
app.post('/api/solve', async (req, res) => {
  const { imageUrl } = req.body;
  try {
    // Fetch the image data
    const response = await fetch(imageUrl);
    if (!response.ok) {
      return res.status(400).json({ error: 'Failed to fetch image' });
    }
    const buffer = await response.buffer();
    // Send image buffer to external API or placeholder
    // For the sample, just respond with dummy text
    // Here, you might integrate with an OCR API (e.g., Tesseract.js or external service)
    // For demonstration, we'll return a fixed dummy text
    res.json({ text: 'ABCD123' });
  } catch (err) {
    res.status(500).json({ error: 'Error processing image' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});