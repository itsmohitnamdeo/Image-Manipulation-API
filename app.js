const express = require('express');
const sharp = require('sharp');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/manipulate-image', async (req, res) => {
  try {
    const { url, width, height, crop, bw, format } = req.query;

    if (!url) {
      return res.status(400).json({ error: 'Missing URL parameter' });
    }

    let imageBuffer;
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      imageBuffer = response.data;
    } catch (error) {
      return res.status(400).json({ error: 'Invalid or unavailable image URL' });
    }

    let image = sharp(imageBuffer);

    if (width && height) {
      if (crop === 'true') {
        image = image.resize({ width: +width, height: +height, fit: 'cover' });
      } else {
        image = image.resize({ width: +width, height: +height });
      }
    } else if (width) {
      image = image.resize({ width: +width });
    } else if (height) {
      image = image.resize({ height: +height });
    }

    if (bw === 'true') {
      image = image.grayscale();
    }

    if (format) {
      image = image.toFormat(format);
    }

    const manipulatedImageBuffer = await image.toBuffer();
    res.set('Content-Type', 'image/jpeg');
    res.send(manipulatedImageBuffer);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
