const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/ask', (req, res) => {
  const { question } = req.body;
  // Simulate AI response
  const response = `This is a simulated response to the question: "${question}"`;
  res.json({ response });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
