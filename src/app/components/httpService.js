import axios from 'axios';

//You can setup default config right here

const defaultConfig = {
  headers: {
    'X-Custom-Header': 'foobar'
  }
};

export default class httpService {

  // If no config will be passed to the class arguments, the defaultConfig will be used

  constructor(config = defaultConfig){
    this.config = config;
  }

  async get(url){
      try {
      const response = await axios.get(url, this.config);
      console.log(response);
    }
    catch (error) {
      console.log(error.response.data);
    }
  }

  async post(url, data){
    try {
      const response = await axios.post(url, data, this.config);
      console.log(response);
    }
    catch (error) {
      console.log(error.response.data);
    }
  }

  async put(url, data){
    try {
      const response = await axios.put(url, data, this.config);
      console.log(response);
    }
    catch (error) {
      console.log(error.response.data);
    }
  }

  async delete(url){
    try {
      const response = await axios.delete(url, this.config);
      console.log(response);
    }
    catch (error) {
      console.log(error.response.data);
    }
  }
};

 