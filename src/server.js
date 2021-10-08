import express from 'express';
import responseTime from "response-time";

import charactersRoutes from './routes/characters.routes.js';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(responseTime());

// Routes
app.use('/characters', charactersRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Error 404!' });
});

// Error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: 'Server error' });
});

export default app;