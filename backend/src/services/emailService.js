const nodemailer = require('nodemailer');

const escapeHtml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const safeSubject = (value) => String(value ?? '').replace(/[\r\n]/g, ' ');

// Create Nodemailer Transporter using Environment Variables
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

/**
 * Send email helper function
 * @param {Object} mailOptions 
 */
const sendMail = async (mailOptions) => {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('[Email Service Warning] SMTP credentials not provided in .env. Skipping email dispatch.');
      return false;
    }

    if (!mailOptions.to) {
      console.warn('[Email Service Warning] RECIPIENT_EMAIL or ADMIN_EMAIL is not configured. Skipping email dispatch.');
      return false;
    }

    const transporter = createTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Service] Email sent successfully: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error(`[Email Service Error] Failed to send email: ${error.message}`);
    return false;
  }
};

/**
 * Send notification email for new Business Enquiry
 */
const sendBusinessEnquiryNotification = async (enquiry) => {
  const recipient = process.env.RECIPIENT_EMAIL || process.env.ADMIN_EMAIL;
  
  const mailOptions = {
    from: `"Digital Kerala Mission" <${process.env.SMTP_USER || 'no-reply@digitalkerala.org'}>`,
    to: recipient,
    subject: safeSubject(`[Digital Kerala] New Business Enquiry from ${enquiry.businessName}`),
    html: `
      <h2>New Business Enquiry Received</h2>
      <p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>
      <p><strong>Business Name:</strong> ${escapeHtml(enquiry.businessName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>
      <p><strong>District:</strong> ${escapeHtml(enquiry.district)}</p>
      <p><strong>Business Category:</strong> ${escapeHtml(enquiry.businessCategory)}</p>
      <p><strong>Current Digital Presence:</strong> ${escapeHtml(enquiry.currentDigitalPresence || 'N/A')}</p>
      <p><strong>Main Challenge:</strong> ${escapeHtml(enquiry.mainChallenge || 'N/A')}</p>
      <p><strong>Preferred Contact Time:</strong> ${escapeHtml(enquiry.preferredContactTime)}</p>
      <p><strong>Submitted At:</strong> ${new Date(enquiry.createdAt).toLocaleString()}</p>
    `,
  };

  return await sendMail(mailOptions);
};

/**
 * Send notification email for new Franchise Application
 */
const sendFranchiseApplicationNotification = async (application) => {
  const recipient = process.env.RECIPIENT_EMAIL || process.env.ADMIN_EMAIL;

  const mailOptions = {
    from: `"Digital Kerala Mission" <${process.env.SMTP_USER || 'no-reply@digitalkerala.org'}>`,
    to: recipient,
    subject: safeSubject(`[Digital Kerala] New Franchise Application from ${application.name}`),
    html: `
      <h2>New Franchise Application Received</h2>
      <p><strong>Name:</strong> ${escapeHtml(application.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(application.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(application.phone)}</p>
      <p><strong>District:</strong> ${escapeHtml(application.district)}</p>
      <p><strong>Current Occupation:</strong> ${escapeHtml(application.currentOccupation)}</p>
      <p><strong>Relevant Experience:</strong> ${escapeHtml(application.relevantExperience || 'N/A')}</p>
      <p><strong>Reason For Interest:</strong> ${escapeHtml(application.reasonForInterest)}</p>
      <p><strong>Preferred Contact Method:</strong> ${escapeHtml(application.preferredContactMethod)}</p>
      <p><strong>Submitted At:</strong> ${new Date(application.createdAt).toLocaleString()}</p>
    `,
  };

  return await sendMail(mailOptions);
};

/**
 * Send notification email for new Contact Message
 */
const sendContactMessageNotification = async (message) => {
  const recipient = process.env.RECIPIENT_EMAIL || process.env.ADMIN_EMAIL;

  const mailOptions = {
    from: `"Digital Kerala Mission" <${process.env.SMTP_USER || 'no-reply@digitalkerala.org'}>`,
    to: recipient,
    subject: safeSubject(`[Digital Kerala Contact] ${message.subject}`),
    html: `
      <h2>New Contact Form Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(message.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(message.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(message.phone || 'N/A')}</p>
      <p><strong>Subject:</strong> ${escapeHtml(message.subject)}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
        ${escapeHtml(message.message)}
      </blockquote>
      <p><strong>Submitted At:</strong> ${new Date(message.createdAt).toLocaleString()}</p>
    `,
  };

  return await sendMail(mailOptions);
};

module.exports = {
  sendBusinessEnquiryNotification,
  sendFranchiseApplicationNotification,
  sendContactMessageNotification,
};
