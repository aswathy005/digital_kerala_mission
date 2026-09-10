# Digital Kerala Mission - Production Backend API

Standalone, production-ready RESTful backend API for the **Digital Kerala Mission** platform built with Node.js, Express.js, MongoDB (Mongoose), JWT, Nodemailer, and security best practices.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Directory Structure](#-project-directory-structure)
- [1. Project Setup](#1-project-setup)
- [2. Installation](#2-installation)
- [3. Environment Variables](#3-environment-variables)
- [4. MongoDB Setup](#4-mongodb-setup)
- [5. Admin Setup & Auto-Seeding](#5-admin-setup--auto-seeding)
- [6. How to Run Development Server](#6-how-to-run-development-server)
- [7. How to Run Production Server](#7-how-to-run-production-server)
- [8. API Endpoint Documentation](#8-api-endpoint-documentation)
- [9. Nodemailer Configuration](#9-nodemailer-configuration)
- [10. Frontend Connection Instructions](#10-frontend-connection-instructions)
- [Security & Best Practices](#-security--best-practices)

---

## ✨ Features

- **Decoupled REST API Architecture**: Independent backend service communicating with React frontend via JSON endpoints.
- **Admin Authentication**: JWT Bearer token authentication with bcrypt password hashing (No public user signup/login).
- **Automated Admin Seeding**: Automatically initializes default admin credentials on boot if database is empty.
- **Public Submissions**: Business enquiries, franchise applications, and contact form messages.
- **Email Notifications**: Asynchronous email notifications to admin via Nodemailer upon form submission (database persistence occurs prior to sending emails to guarantee data integrity).
- **Dynamic Site Content Management**: Admin-editable key-value site content engine supporting text, HTML, image URLs, and JSON data.
- **Content Management (CMS)**: Complete CRUD APIs for published Resources and Success Stories.
- **Security & Rate Limiting**: Protection via Helmet, strict CORS policy restricted to `CLIENT_URL`, express-rate-limit protection, and parameter validation.

---

## 🛠 Tech Stack & Architecture

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Tokens) & `bcryptjs`
- **Email System**: Nodemailer
- **Security & Utilities**: `helmet`, `cors`, `express-rate-limit`, `express-validator`, `dotenv`

### Architecture Layout
```
backend/
├── .env.example
├── .env
├── package.json
├── README.md
└── src/
    ├── config/
    │   └── db.js                 # MongoDB connection logic
    ├── controllers/
    │   ├── adminController.js    # Dashboard, Enquiries, Franchise, Messages, Resources, SiteContent
    │   ├── authController.js     # Admin Login controller
    │   └── publicController.js   # Public submissions & content GET routes
    ├── middleware/
    │   ├── auth.js               # Protects admin routes with JWT
    │   ├── errorHandler.js       # Global Express error & 404 handler
    │   ├── rateLimiter.js        # Public submission & Auth rate limiters
    │   ├── validate.js           # express-validator result handler
    │   └── validateObjectId.js   # Validates Mongoose ObjectIds
    ├── models/
    │   ├── Admin.js
    │   ├── BusinessEnquiry.js
    │   ├── ContactMessage.js
    │   ├── FranchiseApplication.js
    │   ├── Resource.js
    │   ├── SiteContent.js
    │   └── SuccessStory.js
    ├── routes/
    │   ├── adminRoutes.js
    │   ├── authRoutes.js
    │   └── publicRoutes.js
    ├── services/
    │   └── emailService.js       # Reusable Nodemailer notification service
    ├── utils/
    │   ├── adminSeed.js          # Auto-seeds default admin on boot
    │   ├── apiResponse.js        # Standardized success/error response helpers
    │   └── slugify.js            # URL slug generator for resources
    ├── validators/               # Input validation & sanitization rules
    │   ├── authValidator.js
    │   ├── enquiryValidator.js
    │   ├── franchiseValidator.js
    │   ├── messageValidator.js
    │   ├── resourceValidator.js
    │   ├── siteContentValidator.js
    │   └── successStoryValidator.js
    ├── app.js                    # Express app middleware & route configuration
    └── server.js                 # Database connection & server startup
```

---

## 1. Project Setup

Clone the repository or navigate to the project directory:

```bash
cd "c:\Users\aswat\OneDrive\Desktop\digital kerala\backend"
```

Ensure Node.js (v16+ recommended) and MongoDB are installed on your machine or available via cloud connection.

---

## 2. Installation

Install all required production and development dependencies:

```bash
npm install
```

---

## 3. Environment Variables

Create a `.env` file in the project root by copying `.env.example`:

```bash
cp .env.example .env
```

### `.env` File Reference:

| Key | Description | Default / Example Value |
| :--- | :--- | :--- |
| `PORT` | Express server port | `5000` |
| `MONGODB_URI` | MongoDB connection URI string | `mongodb://localhost:27017/digital_kerala_db` |
| `MONGODB_SERVER_SELECTION_TIMEOUT_MS` | MongoDB startup selection timeout in milliseconds | `10000` |
| `JWT_SECRET` | Secret key for signing JWT tokens | `digital_kerala_jwt_secret_key_change_in_production` |
| `CLIENT_URL` | Frontend React application URL | `http://localhost:5173` |
| `SMTP_HOST` | Nodemailer SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port (587 for TLS, 465 for SSL) | `587` |
| `SMTP_USER` | SMTP username/email address | `your_email@gmail.com` |
| `SMTP_PASS` | SMTP password / App password | `your_app_password` |
| `RECIPIENT_EMAIL` | Email recipient for admin notifications | `admin@digitalkerala.org` |
| `ADMIN_NAME` | Default admin display name | `Digital Kerala Admin` |
| `ADMIN_EMAIL` | Default admin login email | `admin@digitalkerala.org` |
| `ADMIN_PASSWORD` | Default admin login password | `AdminPassword123!` |

`ADMIN_EMAIL` and `ADMIN_PASSWORD` are required when the first admin is seeded. Use a strong, unique password in every environment; the application does not fall back to hardcoded admin credentials.

---

## 4. MongoDB Setup

1. **Local MongoDB**: Ensure your MongoDB service is running locally (`mongod` or MongoDB Compass connection at `mongodb://localhost:27017`).
2. **MongoDB Atlas (Cloud)**:
   - Update `MONGODB_URI` in `.env` with your cluster connection string:
     ```env
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/digital_kerala_db?retryWrites=true&w=majority
     ```

---

## 5. Admin Setup & Auto-Seeding

No manual database inserts are required to create an initial admin account.

When the server boots up (`src/server.js`):
1. It queries the `Admin` collection.
2. If zero admins exist, it automatically creates a new admin user using `ADMIN_NAME`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` defined in `.env`.
3. The password is automatically hashed using `bcryptjs` before insertion.

---

## 6. How to Run Development Server

To run the server with `nodemon` (auto-reload on file changes):

```bash
npm run dev
```

Server output on startup:
```
===================================================
 Digital Kerala Mission Backend Server Running 
 Mode: development
 Port: 5000
 Client URL Allowed: http://localhost:5173
===================================================
```

---

## 7. How to Run Production Server

To run the production build using standard Node.js:

```bash
npm start
```

For production deployment with process managers (such as PM2):

```bash
npm install -g pm2
pm2 start src/server.js --name "digital-kerala-backend"
```

For Vercel, set the project root to `backend`. The serverless entrypoint is `api/index.js`; configure the same environment variables in the Vercel project, including `MONGODB_URI`, `JWT_SECRET`, `CLIENT_URL`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`. Do not run `src/server.js` as a Vercel function.

---

## 8. API Endpoint Documentation

All response payloads adhere to a consistent response format:

**Success Response:**
```json
{
  "success": true,
  "message": "Operation description",
  "data": {}
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description"
}
```

### Public Routes (`/api`)

| Method | Endpoint | Description | Request Body / Parameters |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/business-enquiries` | Create business enquiry | `{ name, businessName, phone, email, district, businessCategory, currentDigitalPresence, mainChallenge, preferredContactTime }` |
| `POST` | `/api/franchise-applications` | Create franchise application | `{ name, phone, email, district, currentOccupation, relevantExperience, reasonForInterest, preferredContactMethod }` |
| `POST` | `/api/contact` | Submit contact message | `{ name, email, phone, subject, message }` |
| `GET` | `/api/resources` | Get published resources | Optional query: `?category=digital-marketing` |
| `GET` | `/api/resources/:slug` | Get single published resource | Params: `:slug` |
| `GET` | `/api/success-stories` | Get published success stories | None |
| `GET` | `/api/site-content` | Get public site content | Optional query: `?section=hero` |

---

### Admin Auth Routes (`/api/auth`)

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Admin authentication | `{ email, password }` |

---

### Protected Admin Routes (`/api/admin`)
*Header required*: `Authorization: Bearer <JWT_TOKEN>`

#### Dashboard
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/admin/dashboard` | Returns totals and top 5 recent enquiries, apps, and messages |

#### Business Enquiries Management
| Method | Endpoint | Description | Body / Query |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/business-enquiries` | List all enquiries | Optional query: `?status=New&district=Ernakulam` |
| `GET` | `/api/admin/business-enquiries/:id` | Get single enquiry | Params: `:id` |
| `PATCH` | `/api/admin/business-enquiries/:id` | Update enquiry status | `{ "status": "Contacted" }` (Allowed: `New`, `Contacted`, `Qualified`, `Converted`, `Closed`) |
| `DELETE` | `/api/admin/business-enquiries/:id` | Delete enquiry | Params: `:id` |

#### Franchise Applications Management
| Method | Endpoint | Description | Body / Query |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/franchise-applications` | List all applications | Optional query: `?status=New` |
| `GET` | `/api/admin/franchise-applications/:id` | Get single application | Params: `:id` |
| `PATCH` | `/api/admin/franchise-applications/:id` | Update application status | `{ "status": "Qualified" }` |
| `DELETE` | `/api/admin/franchise-applications/:id` | Delete application | Params: `:id` |

#### Contact Messages Management
| Method | Endpoint | Description | Body / Query |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/contact-messages` | List all contact messages | Optional query: `?status=New` |
| `GET` | `/api/admin/contact-messages/:id` | Get single message | Params: `:id` |
| `PATCH` | `/api/admin/contact-messages/:id` | Update message status | `{ "status": "Read" }` (Allowed: `New`, `Read`, `Replied`, `Archived`) |
| `DELETE` | `/api/admin/contact-messages/:id` | Delete contact message | Params: `:id` |

#### Resources CRUD
| Method | Endpoint | Description | Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/resources` | List all resources | None |
| `POST` | `/api/admin/resources` | Create new resource | `{ title, slug, description, content, image, category, published }` |
| `GET` | `/api/admin/resources/:id` | Get single resource | Params: `:id` |
| `PUT` | `/api/admin/resources/:id` | Update resource | `{ title, description, content, image, category, published }` |
| `DELETE` | `/api/admin/resources/:id` | Delete resource | Params: `:id` |

#### Success Stories CRUD
| Method | Endpoint | Description | Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/success-stories` | List all success stories | None |
| `POST` | `/api/admin/success-stories` | Create success story | `{ name, businessName, location, testimonial, image, published }` |
| `GET` | `/api/admin/success-stories/:id` | Get single success story | Params: `:id` |
| `PUT` | `/api/admin/success-stories/:id` | Update success story | `{ name, businessName, location, testimonial, image, published }` |
| `DELETE` | `/api/admin/success-stories/:id` | Delete success story | Params: `:id` |

#### Site Content CRUD
| Method | Endpoint | Description | Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/site-content` | List all site content items | None |
| `POST` | `/api/admin/site-content` | Create site content entry | `{ section, key, value, type }` |
| `PUT` | `/api/admin/site-content/:id` | Update site content entry | `{ section, key, value, type }` |
| `DELETE` | `/api/admin/site-content/:id` | Delete site content entry | Params: `:id` |

---

## 9. Nodemailer Configuration

When a user submits a **Business Enquiry**, **Franchise Application**, or **Contact Message**:
1. The request payload is validated.
2. The record is written to MongoDB.
3. An email notification is automatically constructed and sent to `RECIPIENT_EMAIL` (or `ADMIN_EMAIL`).

### Gmail SMTP Setup Example:
If using Gmail, generate an **App Password**:
1. Go to Google Account Settings -> Security -> 2-Step Verification.
2. Generate an **App Password** under "App passwords".
3. Add credentials in `.env`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_16_character_app_password
   RECIPIENT_EMAIL=admin@digitalkerala.org
   ```

*Note: If SMTP credentials are omitted, the application will record a warning log and continue processing form submissions seamlessly without failing DB writes.*

---

## 10. Frontend Connection Instructions

The backend API is configured to communicate with the React frontend running on `http://localhost:5173`.

### 1. Configure React API Base URL
In your React project (`.env` or API client setup):

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 2. Axios / Fetch Example Integration

#### Public Business Enquiry Submission:
```javascript
import axios from 'axios';

const submitEnquiry = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/business-enquiries', formData);
    console.log(response.data.message); // "Business enquiry submitted successfully"
  } catch (error) {
    console.error(error.response?.data?.message || 'Submission failed');
  }
};
```

#### Admin Login & Storing JWT:
```javascript
const loginAdmin = async (email, password) => {
  const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
  const { token } = response.data.data;
  localStorage.setItem('adminToken', token);
};

// Protected Admin API Call
const getDashboardData = async () => {
  const token = localStorage.getItem('adminToken');
  const response = await axios.get('http://localhost:5000/api/admin/dashboard', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
```

---

## 🔒 Security & Best Practices

- **Password Security**: Passwords are standardly hashed with `bcryptjs` using a salt round of 10 and are stripped from default Mongoose queries (`select: false`).
- **HTTP Headers Security**: `helmet` is enabled to set appropriate security-related HTTP headers.
- **Strict CORS**: CORS is restricted to `CLIENT_URL`.
- **Rate Limiting**: Custom rate limiters protect login attempts (10/15min) and form submissions (15/15min) against brute force and DDoS attacks.
- **Input Sanitization**: `express-validator` sanitizes and escapes incoming payload fields.
- **ObjectId Validation**: `validateObjectId` middleware prevents invalid Mongoose ObjectId casting errors.
