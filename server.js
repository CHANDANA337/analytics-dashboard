const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Analytics App Backend Running');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});