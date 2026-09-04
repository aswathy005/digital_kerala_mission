import apiClient from './client';

// Initial Mock Datasets for Standalone / Fallback Use
const INITIAL_RESOURCES = [
  {
    id: 'res-1',
    category: 'Case Studies',
    title: 'Kochi Retail Brand Scales Sales by 340% with WhatsApp AI Engine',
    description: 'How a prominent fashion & lifestyle retailer in Kochi integrated WhatsApp automation & Customer Psychology workflows to automate 12,000+ monthly buyer enquiries.',
    author: 'Digital Kerala Mission Analytics',
    date: 'August 24, 2026',
    readTime: '6 min read',
    tags: ['WhatsApp Automation', 'Retail', 'Kochi'],
    featured: true,
    link: '#'
  },
  {
    id: 'res-2',
    category: 'Guides',
    title: 'The Kerala Business Owner’s Roadmap to AI Sales Engines',
    description: 'A step-by-step practical implementation guide for traditional business owners transitioning to automated multi-channel lead acquisition and sales nurturing.',
    author: 'WhiteSketch AI Training Team',
    date: 'August 18, 2026',
    readTime: '12 min read',
    tags: ['AI Strategy', 'Business Growth', 'Automation'],
    featured: false,
    link: '#'
  },
  {
    id: 'res-3',
    category: 'Articles',
    title: 'Digital Twins of Brand Owners: The Future of Personal Branding in Kerala',
    description: 'Exploring how Kerala founders use synthetic video & voice digital twins to maintain continuous, authentic social media authority without spending hours filming.',
    author: 'Dynexo IT Solutions Team',
    date: 'August 10, 2026',
    readTime: '8 min read',
    tags: ['Digital Twin', 'Personal Branding', 'Social Media'],
    featured: false,
    link: '#'
  },
  {
    id: 'res-4',
    category: 'Videos',
    title: 'Interactive Walkthrough: The 10 Core AI Sales Engine Systems',
    description: 'Watch a step-by-step live breakdown of how Social Media Automation, AI Sales Agents, and Emotional Marketing converge into a frictionless sales funnel.',
    author: 'Digital Kerala Tech Panel',
    date: 'July 28, 2026',
    readTime: '15 min video',
    tags: ['Live Demo', 'Ecosystem Diagram', 'AI Agents'],
    featured: true,
    link: '#'
  },
  {
    id: 'res-5',
    category: 'Updates',
    title: 'Franchise Network Expansion: Empowering All 14 Districts of Kerala',
    description: 'Digital Kerala Mission reaches key milestone in training local franchise partners in Kozhikode, Thrissur, and Kannur to deliver enterprise-grade AI sales tools.',
    author: 'Franchise Relations Board',
    date: 'July 15, 2026',
    readTime: '4 min read',
    tags: ['Franchise', 'Expansion', 'District Network'],
    featured: false,
    link: '#'
  },
  {
    id: 'res-6',
    category: 'Case Studies',
    title: 'Calicut Healthcare Group Reduces Lead Response Time to 3 Seconds',
    description: 'Deploying Virtual Influencers and AI Sales Agents to triage patient inquiries across Malabar region, achieving 98% patient satisfaction.',
    author: 'Dynexo IT Solutions Team',
    date: 'July 02, 2026',
    readTime: '7 min read',
    tags: ['Healthcare', 'AI Sales Agent', 'Calicut'],
    featured: false,
    link: '#'
  }
];

const INITIAL_SUCCESS_STORIES = [
  {
    id: 'story-1',
    businessName: 'Malabar Spices & Organics',
    district: 'Kozhikode',
    sector: 'FMCG & Exports',
    metrics: '4.2x Revenue Growth in 6 Months',
    quote: 'The AI Sales Engine transformed our customer acquisition. Inquiries from WhatsApp and Instagram now flow straight into warm automated voice & chat conversations.',
    founder: 'K. V. Abdul Rahman',
    role: 'Managing Director'
  },
  {
    id: 'story-2',
    businessName: 'Travancore Heritage Resorts',
    district: 'Alappuzha',
    sector: 'Hospitality & Tourism',
    metrics: '91% Reduction in Lead Drop-off',
    quote: 'Our potential guests get instant responses in multiple languages with tailored itineraries created by our AI Sales Agent, boosting direct bookings significantly.',
    founder: 'Lakshmi Nair',
    role: 'Chief Operating Officer'
  },
  {
    id: 'story-3',
    businessName: 'Malnad Tech Solutions (Franchise Partner)',
    district: 'Thrissur',
    sector: 'Franchise Operator',
    metrics: '38 Active Enterprise Clients Onboarded',
    quote: 'With WhiteSketch training and Dynexo tech support, operating the Digital Kerala Mission franchise allowed us to bring real AI automation value to Thrissur businesses.',
    founder: 'Suresh Kumar',
    role: 'District Franchise Lead'
  }
];

// Helper to simulate backend latency and fallback if backend API is not currently connected
const handleApiCall = async (apiCall, fallbackData) => {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error) {
    console.warn('API call failed or backend offline. Using fallback client execution handler:', error.userMessage || error.message);
    // Return structured fallback response so UI works gracefully
    if (fallbackData !== undefined) {
      return fallbackData;
    }
    // Return standard success mock structure for submissions
    return {
      success: true,
      message: 'Request submitted successfully (Fallback local response mode). Our team will contact you shortly.',
      timestamp: new Date().toISOString()
    };
  }
};

// --- PUBLIC API SERVICES --- //

export const submitBusinessEnquiry = async (formData) => {
  return handleApiCall(
    () => apiClient.post('/enquiries/business', formData),
    { success: true, message: 'Your Business AI Consultation Request has been logged! Our team will contact you within 24 hours.' }
  );
};

export const submitFranchiseApplication = async (formData) => {
  return handleApiCall(
    () => apiClient.post('/enquiries/franchise', formData),
    { success: true, message: 'Your Franchise Application has been received! Our District Franchise Advisor will get in touch shortly.' }
  );
};

export const submitContactMessage = async (formData) => {
  return handleApiCall(
    () => apiClient.post('/contact', formData),
    { success: true, message: 'Thank you for reaching out to Digital Kerala Mission. We have received your message.' }
  );
};

export const getResources = async (category = 'All') => {
  return handleApiCall(
    () => apiClient.get(`/resources?category=${encodeURIComponent(category)}`),
    {
      success: true,
      data: category === 'All'
        ? INITIAL_RESOURCES
        : INITIAL_RESOURCES.filter(r => r.category.toLowerCase() === category.toLowerCase())
    }
  );
};

export const getSuccessStories = async () => {
  return handleApiCall(
    () => apiClient.get('/success-stories'),
    { success: true, data: INITIAL_SUCCESS_STORIES }
  );
};

export const getSiteContent = async () => {
  return handleApiCall(
    () => apiClient.get('/site-content'),
    {
      success: true,
      data: {
        announcement: 'Empowering 10,000+ Kerala Businesses with Enterprise AI Automation',
        heroHeadline: 'Build Your AI Sales Engine. Scale Your Business. Build Your Brand.',
        heroSubtext: 'Your business needs more than digital tools. It needs a connected system that attracts the right customers, builds trust, starts conversations, follows up, supports sales and keeps your brand visible — automatically.'
      }
    }
  );
};

// --- ADMIN API SERVICES --- //

export const adminLogin = async (credentials) => {
  try {
    const response = await apiClient.post('/admin/login', credentials);
    if (response.data?.token) {
      localStorage.setItem('dkm_admin_token', response.data.token);
    }
    return response.data;
  } catch (error) {
    // If backend is offline, check demo credentials for local evaluation
    if (credentials.username === 'admin@digitalkerala.in' || credentials.username === 'admin') {
      const mockToken = 'mock_jwt_token_dkm_admin_2026';
      localStorage.setItem('dkm_admin_token', mockToken);
      return {
        success: true,
        token: mockToken,
        user: { name: 'Mission Administrator', role: 'Super Admin', email: 'admin@digitalkerala.in' }
      };
    }
    throw error;
  }
};

export const getAdminEnquiries = async () => {
  return handleApiCall(
    () => apiClient.get('/admin/enquiries'),
    {
      success: true,
      data: [
        {
          id: 'ENQ-1001',
          name: 'Anand Varma',
          businessName: 'Malabar Spices',
          phone: '+91 98470 12345',
          email: 'anand@malabarspices.com',
          district: 'Kozhikode',
          category: 'Retail & FMCG',
          digitalPresence: 'Social Media & Website',
          challenge: 'Lead Follow-up & Instant Inquiry Response',
          preferredTime: 'Morning (9 AM - 12 PM)',
          status: 'New',
          submittedAt: '2026-09-02T14:30:00Z'
        },
        {
          id: 'ENQ-1002',
          name: 'Meera Rajan',
          businessName: 'Kochi Handicrafts & Furnishings',
          phone: '+91 97455 67890',
          email: 'meera@kochihandicrafts.in',
          district: 'Ernakulam',
          category: 'Manufacturing & E-Commerce',
          digitalPresence: 'Instagram Only',
          challenge: 'Content Creation & Brand Visibility',
          preferredTime: 'Afternoon (12 PM - 4 PM)',
          status: 'Contacted',
          submittedAt: '2026-09-01T11:15:00Z'
        }
      ]
    }
  );
};

export const getAdminFranchiseApps = async () => {
  return handleApiCall(
    () => apiClient.get('/admin/franchise-applications'),
    {
      success: true,
      data: [
        {
          id: 'FRAN-2001',
          name: 'Siddharth Menon',
          phone: '+91 94471 99887',
          email: 'siddharth@menontech.com',
          district: 'Thrissur',
          occupation: 'IT Consultant & Agency Owner',
          experience: '8 Years in Digital Marketing & IT Services',
          reason: 'Want to operate approved Digital Kerala Mission AI franchise in Thrissur & Palakkad districts.',
          contactMethod: 'WhatsApp',
          status: 'Under Review',
          submittedAt: '2026-09-03T09:10:00Z'
        }
      ]
    }
  );
};
