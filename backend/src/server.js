const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const seedAdmin = require('./utils/adminSeed');

dotenv.config();

const app = require('./app');
const PORT = process.env.PORT || 5000;

// Start Server Routine
const startServer = async () => {
  try {
    const missingVariables = ['MONGODB_URI', 'JWT_SECRET'].filter(
      (variable) => !process.env[variable]
    );

    if (missingVariables.length > 0) {
      throw new Error(`Missing required environment variables: ${missingVariables.join(', ')}`);
    }

    // 1. Connect to MongoDB
    await connectDB();

    // 2. Seed Default Admin User if non-existent
    await seedAdmin();

    // 3. Start Express Server
    const server = await new Promise((resolve, reject) => {
      const httpServer = app.listen(PORT, () => resolve(httpServer));
      httpServer.once('error', reject);
    });

    console.log(`===================================================`);
    console.log(` Digital Kerala Mission Backend Server Running `);
    console.log(` Mode: ${process.env.NODE_ENV || 'development'}`);
    console.log(` Port: ${PORT}`);
    console.log(` Client URL Allowed: ${process.env.CLIENT_URL || 'http://localhost:3000,http://localhost:5173'}`);
    console.log(`===================================================`);

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

    const shutdown = (signal) => {
      console.log(`[Server] ${signal} received. Shutting down gracefully.`);
      server.close(() => {
        mongoose.connection.close(false).finally(() => process.exit(0));
      });
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));

  } catch (error) {
    console.error(`[Server Start Error] Failed to initialize server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
