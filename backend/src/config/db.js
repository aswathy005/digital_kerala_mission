const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: Number(process.env.MONGODB_SERVER_SELECTION_TIMEOUT_MS) || 10000,
  });
  console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
