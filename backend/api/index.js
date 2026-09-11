require('dotenv').config();

const connectDB = require('../src/config/db');
const app = require('../src/app');

let databaseConnection;
const apiPathPrefixes = [
	'/auth',
	'/admin',
	'/business-enquiries',
	'/franchise-applications',
	'/contact',
	'/resources',
	'/success-stories',
	'/testimonials',
	'/site-content',
];

const ensureDatabaseConnection = () => {
	if (!databaseConnection) {
		databaseConnection = connectDB().catch((error) => {
			databaseConnection = null;
			throw error;
		});
	}

	return databaseConnection;
};

// Vercel serverless function entry handler
module.exports = async (req, res) => {
	const requestPath = req.url.split('?')[0];
	if (apiPathPrefixes.some((prefix) => requestPath === prefix || requestPath.startsWith(`${prefix}/`))) {
		req.url = `/api${req.url}`;
	}

	// Preflight OPTIONS requests must complete immediately via Express CORS middleware without waiting for DB
	if (req.method === 'OPTIONS') {
		return app(req, res);
	}

	try {
		await ensureDatabaseConnection();
	} catch (error) {
		console.error(`[Vercel Database Error] ${error.message}`);
		req.dbError = error;
	}

	return app(req, res);
};