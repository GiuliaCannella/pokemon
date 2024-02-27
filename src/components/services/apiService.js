// apiService.js
import axios from "axios";

const baseURL =
  "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/";

const apiService = axios.create({
  baseURL,
});

export default {
  async get(url, params) {
    try {
      const response = await apiService.get(url, { params });
      return response.data;
    } catch (error) {
      console.log("Errore chiamata");
      // Puoi gestire gli errori qui se necessario
      throw error;
    }
  },
};
