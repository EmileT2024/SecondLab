const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 3000;

// synchronize database (in development, { force: true } if needed)
db.sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => console.error('Failed to sync db:', err));