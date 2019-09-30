import axios from 'axios';

// You can setup default config right here

const defaultConfig = {
  headers: {
    'X-Custom-Header': 'foobar',
  },
};

export default class HttpService {
  // If no config will be passed to the class arguments, the defaultConfig will be used

  constructor(config = defaultConfig) {
    this.config = config;
  }

  async get(url) {
    try {
      const response = await axios.get(url, this.config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async post(url, data) {
    try {
      const response = await axios.post(url, data, this.config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async put(url, data) {
    try {
      const response = await axios.put(url, data, this.config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async delete(url) {
    try {
      const response = await axios.delete(url, this.config);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
};


