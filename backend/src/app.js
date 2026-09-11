const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');

// Load Environment Variables
dotenv.config();

// Route Imports
const authRoutes = require('./routes/authRoutes');
const publicRoutes = require('./routes/publicRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Middleware Imports
const { errorHandler, notFound } = require('./middleware/errorHandler');
const { sendError } = require('./utils/apiResponse');

const app = express();

// CORS Configuration
const configuredClientOrigins = [
  ...(process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : []),
  ...(process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',') : []),
].map((origin) => origin.trim()).filter(Boolean);

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5173',
  'https://digital-kerala-mission.vercel.app',
  'https://digital-kerala-mission-exy9.vercel.app',
  ...configuredClientOrigins,
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);

    const normalizedOrigin = origin.replace(/\/$/, '').toLowerCase();
    const isAllowed =
      allowedOrigins.some((allowed) => {
        if (!allowed) return false;
        return normalizedOrigin === allowed.replace(/\/$/, '').toLowerCase();
      }) || /^https:\/\/digital-kerala-mission.*\.vercel\.app$/.test(normalizedOrigin);

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`[CORS] Blocked request from origin: ${origin}`);
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  optionsSuccessStatus: 200,
};

// 1. CORS Middleware mounted FIRST before any other middleware or routes
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// 2. Security Headers Middleware
app.use(helmet());

// 3. Body Parser Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// 4. DB Error Check Middleware (from serverless entry if DB connection failed)
app.use((req, res, next) => {
  if (req.dbError) {
    return sendError(res, 503, 'Database connection unavailable');
  }
  next();
});

// Health Check & Root Endpoints
const statusHandler = (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Digital Kerala Mission API service is operational',
    timestamp: new Date().toISOString(),
  });
};

app.get('/', statusHandler);
app.get('/api', statusHandler);
app.get('/health', statusHandler);
app.get('/api/health', statusHandler);

// API Routes Mounting
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', publicRoutes);

// Catch 404 & Global Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;

