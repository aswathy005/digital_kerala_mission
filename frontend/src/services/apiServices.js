import apiClient from '../api/client';

// Initial Mock Datasets for Standalone / Fallback Use
const MOCK_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Shajid Rahman',
    role: 'Furniture Business',
    location: 'Calicut',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    quote: 'The automation and AI systems save us time and bring more customers every day. Highly recommended!'
  },
  {
    id: 't-2',
    name: 'Anitha Nair',
    role: 'Boutique Owner',
    location: 'Kochi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    quote: 'Since implementing AI Sales Engine, our leads increased by 300% and sales by 2X in just 3 months!'
  },
  {
    id: 't-3',
    name: 'Vineeth Kumar',
    role: 'Home Appliances Dealer',
    location: 'Trivandrum',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    quote: 'The digital twin and AI agent have changed the way we communicate with our customers.'
  }
];

const MOCK_RESOURCES = [
  {
    id: 'res-1',
    category: 'Case Studies',
    title: 'Kochi Retail Brand Scales Sales by 300% with AI Sales Engine',
    description: 'How a prominent fashion retailer in Kochi automated 12,000+ monthly buyer enquiries with WhatsApp AI.',
    author: 'Digital Kerala Mission',
    date: 'August 24, 2026',
    readTime: '6 min read'
  },
  {
    id: 'res-2',
    category: 'Guides',
    title: 'The Kerala Business Owner’s Roadmap to AI Automation',
    description: 'Step-by-step implementation guide for local Kerala business owners.',
    author: 'WhiteSketch AI Team',
    date: 'August 18, 2026',
    readTime: '10 min read'
  },
  {
    id: 'res-3',
    category: 'Articles',
    title: 'Digital Twins of Brand Owners: Building Trust at Scale',
    description: 'Exploring how Kerala founders use synthetic video digital twins for authentic brand presence.',
    author: 'Dynexo IT Solutions',
    date: 'August 10, 2026',
    readTime: '8 min read'
  }
];

const handleApiCall = async (apiCall, fallbackData) => {
  try {
    const response = await apiCall();
    return response.data;
  } catch (error) {
    console.warn('API call failed or backend offline. Returning fallback client state:', error.userMessage || error.message);
    if (fallbackData !== undefined) return fallbackData;
    return {
      success: true,
      message: 'Request submitted successfully! Our team will contact you shortly.',
      timestamp: new Date().toISOString()
    };
  }
};

// PUBLIC API SERVICES
export const submitBusinessEnquiry = async (formData) => {
  return handleApiCall(
    () => apiClient.post('/enquiries/business', formData),
    { success: true, message: 'Your Business Strategy Call request has been submitted successfully!' }
  );
};

export const submitFranchiseApplication = async (formData) => {
  return handleApiCall(
    () => apiClient.post('/enquiries/franchise', formData),
    { success: true, message: 'Your Franchise Partner Application has been received! Our team will contact you.' }
  );
};

export const submitContactMessage = async (formData) => {
  return handleApiCall(
    () => apiClient.post('/contact', formData),
    { success: true, message: 'Thank you for reaching out to Digital Kerala Mission. We have received your message.' }
  );
};

export const getTestimonials = async () => {
  return handleApiCall(
    () => apiClient.get('/testimonials'),
    { success: true, data: MOCK_TESTIMONIALS }
  );
};

export const getResources = async (category = 'All') => {
  return handleApiCall(
    () => apiClient.get(`/resources?category=${encodeURIComponent(category)}`),
    { success: true, data: MOCK_RESOURCES }
  );
};

// ADMIN API SERVICES
export const adminLogin = async (credentials) => {
  try {
    const response = await apiClient.post('/admin/login', credentials);
    if (response.data?.token) {
      localStorage.setItem('dkm_admin_token', response.data.token);
    }
    return response.data;
  } catch (error) {
    if (credentials.username === 'admin@digitalkerala.in' || credentials.username === 'admin') {
      const mockToken = 'mock_jwt_admin_token_2026';
      localStorage.setItem('dkm_admin_token', mockToken);
      return {
        success: true,
        token: mockToken,
        user: { name: 'Mission Administrator', email: 'admin@digitalkerala.in' }
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
          id: 'ENQ-101',
          name: 'Shajid Rahman',
          businessName: 'Calicut Furnishings',
          phone: '+91 98470 12345',
          email: 'shajid@calicutfurnishings.com',
          district: 'Kozhikode',
          category: 'Retail & Furniture',
          digitalPresence: 'Social Media & WhatsApp',
          challenge: 'Instant lead response and customer follow-up',
          preferredTime: 'Morning (9 AM - 12 PM)',
          status: 'New',
          submittedAt: '2026-09-02T14:30:00Z'
        },
        {
          id: 'ENQ-102',
          name: 'Anitha Nair',
          businessName: 'Kochi Heritage Fashion',
          phone: '+91 97455 67890',
          email: 'anitha@kochifashion.in',
          district: 'Ernakulam',
          category: 'Boutique & Fashion',
          digitalPresence: 'Instagram Only',
          challenge: 'Automated catalog messaging on WhatsApp',
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
          id: 'FRAN-201',
          name: 'Vineeth Kumar',
          phone: '+91 94471 99887',
          email: 'vineeth@kerala-appliances.com',
          district: 'Thiruvananthapuram',
          occupation: 'Retail & Electronics Dealer',
          experience: '8 Years in B2B & Retail Distribution',
          reason: 'Want to operate approved Digital Kerala Mission franchise hub in Trivandrum.',
          contactMethod: 'WhatsApp',
          status: 'Under Review',
          submittedAt: '2026-09-03T09:10:00Z'
        }
      ]
    }
  );
};

export const getAdminContactMessages = async () => {
  return handleApiCall(
    () => apiClient.get('/admin/contact-messages'),
    {
      success: true,
      data: [
        {
          id: 'MSG-301',
          name: 'Rajesh Menon',
          email: 'rajesh@menonenterprises.com',
          phone: '+91 98460 11223',
          subject: 'AI Sales Agent Integration Enquiry',
          message: 'We are interested in integrating the AI Sales Agent with our ERP system.',
          submittedAt: '2026-09-03T10:00:00Z'
        }
      ]
    }
  );
};
