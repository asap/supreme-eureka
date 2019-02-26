module.exports = {
  bodyLimit: '100kb',
  cors: {
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3001',
    ],
  },
};
