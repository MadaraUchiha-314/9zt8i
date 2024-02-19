import express from 'express';

const PORT = 3000;

const main = () => {
  const app = express();
  app.listen(PORT, () => {
    console.log('app running on port: ', PORT);
  });
  app.get('/health', (_, res) => {
    res.json({
      status: 'ok',
    });
  });
};

main();
