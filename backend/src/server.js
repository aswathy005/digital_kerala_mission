const app = require('./app');
const connectDB = require('./config/db');
const seedAdmin = require('./utils/adminSeed');

const PORT = process.env.PORT || 5000;

// Start Server Routine
const startServer = async () => {
  try {
    // 1. Connect to MongoDB
    await connectDB();

    // 2. Seed Default Admin User if non-existent
    await seedAdmin();

    // 3. Start Express Server
    const server = app.listen(PORT, () => {
      console.log(`===================================================`);
      console.log(` Digital Kerala Mission Backend Server Running `);
      console.log(` Mode: ${process.env.NODE_ENV || 'development'}`);
      console.log(` Port: ${PORT}`);
      console.log(` Client URL Allowed: ${process.env.CLIENT_URL || 'http://localhost:5173'}`);
      console.log(`===================================================`);
    });

    // Handle Unhandled Promise Rejections
    process.on('unhandledRejection', (err) => {
      console.error(`[Unhandled Rejection] Error: ${err.message}`);
      server.close(() => process.exit(1));
    });

    // Handle Uncaught Exceptions
    process.on('uncaughtException', (err) => {
      console.error(`[Uncaught Exception] Error: ${err.message}`);
      server.close(() => process.exit(1));
    });

  } catch (error) {
    console.error(`[Server Start Error] Failed to initialize server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
