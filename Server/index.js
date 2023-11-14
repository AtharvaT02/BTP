const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb'); // Destructure MongoClient from mongodb

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb+srv://BTP:BTP2023@btp.btnjwtm.mongodb.net/';

app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Server!</h1>');
});

app.post('/addWebsite', async (req, res) => {
  const websiteData = req.body;
  let client; // Define client variable in a broader scope

  try {
    // Connect to the MongoDB database
    client = new MongoClient(mongoURI, { useNewUrlParser: true });
    await client.connect();

    const db = client.db();
    const collection = db.collection('websiteData');

    const existingWebsite = await collection.findOne({ websiteName: websiteData.websiteName });

    if (existingWebsite) {
      res.status(400).json({ error: 'Website name already exists' });
    } else {
      const result = await collection.insertOne(websiteData);
      res.status(200).json({ message: 'Website added successfully', result });
    }
  } catch (error) {
    console.error('Error adding website:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    // Close the MongoDB connection if it was successfully opened
    if (client) {
      client.close();
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
