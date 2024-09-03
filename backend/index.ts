import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const validCredentials = {
  name: 'Tomly',
  password: 'Tomly254',
};

app.post('/api/login', (req, res) => {
  const { name, password } = req.body;

  if (name === validCredentials.name && password === validCredentials.password) {
    res.status(200).json({ message: 'You have logged in successfully!' });
  } else {
    res.status(401).json({ message: 'Credentials Are Invalid!' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
