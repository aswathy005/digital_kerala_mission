import apiClient from './client';

const unwrap = (response) => response.data;

const normalizeRecord = (record) => ({
  ...record,
  id: record.id || record._id,
  submittedAt: record.submittedAt || record.createdAt,
  category: record.category || record.businessCategory,
  challenge: record.challenge || record.mainChallenge,
  occupation: record.occupation || record.currentOccupation,
  experience: record.experience || record.relevantExperience,
  reason: record.reason || record.reasonForInterest,
  contactMethod: record.contactMethod || record.preferredContactMethod,
});

const normalizeListResponse = (response) => {
  const payload = unwrap(response);
  return {
    ...payload,
    data: Array.isArray(payload.data) ? payload.data.map(normalizeRecord) : payload.data,
  };
};

export const submitBusinessEnquiry = async (formData) => unwrap(await apiClient.post('/business-enquiries', {
  name: formData.name,
  businessName: formData.businessName,
  phone: formData.phone,
  email: formData.email,
  district: formData.district,
  businessCategory: formData.businessCategory || formData.category,
  currentDigitalPresence: formData.currentDigitalPresence || formData.digitalPresence,
  mainChallenge: formData.mainChallenge || formData.challenge,
  preferredContactTime: formData.preferredContactTime || formData.preferredTime,
}));

export const submitFranchiseApplication = async (formData) => unwrap(await apiClient.post('/franchise-applications', {
  name: formData.name,
  phone: formData.phone,
  email: formData.email,
  district: formData.district,
  currentOccupation: formData.currentOccupation || formData.occupation,
  relevantExperience: formData.relevantExperience || formData.experience,
  reasonForInterest: formData.reasonForInterest || formData.reason,
  preferredContactMethod: formData.preferredContactMethod || formData.contactMethod,
}));

export const submitContactMessage = async (formData) => unwrap(await apiClient.post('/contact', formData));

export const getResources = async (category = 'All') => normalizeListResponse(
  await apiClient.get('/resources', { params: category === 'All' ? {} : { category } })
);
export const getResourceBySlug = async (slug) => unwrap(await apiClient.get(`/resources/${encodeURIComponent(slug)}`));
export const getSuccessStories = async () => normalizeListResponse(await apiClient.get('/success-stories'));
export const getSiteContent = async () => unwrap(await apiClient.get('/site-content'));

export const adminLogin = async (credentials) => {
  const response = unwrap(await apiClient.post('/auth/login', {
    email: credentials.email || credentials.username,
    password: credentials.password,
  }));
  if (response.data?.token) localStorage.setItem('dkm_admin_token', response.data.token);
  return response;
};

export const getAdminDashboard = async () => unwrap(await apiClient.get('/admin/dashboard'));

export const getAdminEnquiries = async () => normalizeListResponse(await apiClient.get('/admin/business-enquiries'));
export const updateAdminEnquiry = async (id, status) => unwrap(await apiClient.patch(`/admin/business-enquiries/${id}`, { status }));
export const deleteAdminEnquiry = async (id) => unwrap(await apiClient.delete(`/admin/business-enquiries/${id}`));

export const getAdminFranchiseApps = async () => normalizeListResponse(await apiClient.get('/admin/franchise-applications'));
export const updateAdminFranchiseApp = async (id, status) => unwrap(await apiClient.patch(`/admin/franchise-applications/${id}`, { status }));
export const deleteAdminFranchiseApp = async (id) => unwrap(await apiClient.delete(`/admin/franchise-applications/${id}`));

export const getAdminContactMessages = async () => normalizeListResponse(await apiClient.get('/admin/contact-messages'));
export const updateAdminContactMessage = async (id, status) => unwrap(await apiClient.patch(`/admin/contact-messages/${id}`, { status }));
export const deleteAdminContactMessage = async (id) => unwrap(await apiClient.delete(`/admin/contact-messages/${id}`));

export const getAdminResources = async () => normalizeListResponse(await apiClient.get('/admin/resources'));
export const createAdminResource = async (data) => unwrap(await apiClient.post('/admin/resources', data));
export const updateAdminResource = async (id, data) => unwrap(await apiClient.put(`/admin/resources/${id}`, data));
export const deleteAdminResource = async (id) => unwrap(await apiClient.delete(`/admin/resources/${id}`));

export const getAdminSuccessStories = async () => normalizeListResponse(await apiClient.get('/admin/success-stories'));
export const createAdminSuccessStory = async (data) => unwrap(await apiClient.post('/admin/success-stories', data));
export const updateAdminSuccessStory = async (id, data) => unwrap(await apiClient.put(`/admin/success-stories/${id}`, data));
export const deleteAdminSuccessStory = async (id) => unwrap(await apiClient.delete(`/admin/success-stories/${id}`));

export const getAdminSiteContent = async () => normalizeListResponse(await apiClient.get('/admin/site-content'));
export const createAdminSiteContent = async (data) => unwrap(await apiClient.post('/admin/site-content', data));
export const updateAdminSiteContent = async (id, data) => unwrap(await apiClient.put(`/admin/site-content/${id}`, data));
export const deleteAdminSiteContent = async (id) => unwrap(await apiClient.delete(`/admin/site-content/${id}`));

export const getTestimonials = getSuccessStories;
