import express from 'express';

const PORT = 3000;

const main = () => {
  const app = express();
  app.listen(PORT, () => {
    console.log('application is running on port: ', PORT);
  });
  app.get('/health', (_, res) => {
    console.log('got GET request for /health');
    res.json({
      status: 'ok',
    });
  });
  app.get('/', (_, res) => {
    console.log('got GET request for /');
    res.json({
      message: 'Hello, World!',
    });
  });
};

main();
