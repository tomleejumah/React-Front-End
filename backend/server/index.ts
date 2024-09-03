import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Express server
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Hardcoded credentials
const validCredentials = {
  name: 'JohnDoe',
  password: 'password123',
};

// Routes for login
app.post('/api/login', (req, res) => {
  const { name, password } = req.body;

  if (name === validCredentials.name && password === validCredentials.password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
