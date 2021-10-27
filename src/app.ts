import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log(`Server running on 0.0.0.0:3000`)
});