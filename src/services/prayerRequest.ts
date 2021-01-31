import api from '@config/api';

class PrayerRequest {
  async createPrayerRequest(userId: string, request: string) {
    try {
      await api.post('prayer-request', {
        userId,
        request,
      });

      return {
        status: true,
      };
    } catch (err) {
      return {
        status: false,
        message: err.response.message,
      };
    }
  }
}

export default new PrayerRequest();
