const express = require('express');
const next = require('next');
const errorHandler = require('./middleware/errorHandler');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

   server.get('/cause-error', (req, res) => {
  throw new Error('Simulated server-side error');
});

    server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.use(errorHandler);

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

