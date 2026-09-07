const Admin = require('../models/Admin');

/**
 * Automatically seeds default Admin user on server startup if none exists.
 */
const seedAdmin = async () => {
  try {
    const adminCount = await Admin.countDocuments();

    if (adminCount === 0) {
      const name = process.env.ADMIN_NAME || 'Digital Kerala Admin';
      const email = process.env.ADMIN_EMAIL || 'admin@digitalkerala.org';
      const password = process.env.ADMIN_PASSWORD || 'AdminPassword123!';

      await Admin.create({
        name,
        email,
        password,
      });

      console.log(`[Admin Seed] Default admin created successfully: ${email}`);
    } else {
      console.log('[Admin Seed] Admin account already exists. Skipping initialization.');
    }
  } catch (error) {
    console.error(`[Admin Seed Error] Failed to seed default admin: ${error.message}`);
  }
};

module.exports = seedAdmin;
