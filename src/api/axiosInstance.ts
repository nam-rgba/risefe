import axios from 'axios';
import { alert } from '@/provider/AlertService';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 3000,
});

// Interceptor: Thêm token vào header trước khi gửi request
axiosInstance.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem('accessToken'); // Hoặc lấy từ context
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401 || status === 403) {
        // handle continue here
        alert(data?.message, 'Unauthorized', 'error');
      } else {
        console.error(`Error ${status}:`, data?.message || 'Unknown error');
        // Có thể dùng toast hoặc alert ở đây nếu muốn
        alert(data?.message || 'Có lỗi xảy ra.');
      }
    } else {
      console.error('Network error:', error.message);
      alert('Lỗi mạng hoặc máy chủ không phản hồi.');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
