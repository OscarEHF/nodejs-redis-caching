import app from './server.js';

// Starting the server
app
  .listen(app.get('port'), () => {
    console.log(`Server listening at http://localhost:${app.get('port')}`);
  })
  .on('error', (err) => {
    console.error(err.stack);
  });
