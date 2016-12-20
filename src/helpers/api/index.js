import config from 'config';
import axios from 'axios';

class ApiClient {
  constructor() {
    this.apiURL = config.apiURL;
  }

  // authenticate = () => axios({
  //   url: '/oauth2/authenticate',
  //   baseURL: this.apiURL,
  //   params: {
  //     client_id: config.client_id,
  //     response_type: 'token',
  //     redirect_uri: config.redirect_uri,
  //   },
  // })

  get = (url, params = {}, options = {}) => axios({
    url,
    baseURL: this.apiURL,
    params: {
      ...params,
      oauth_token: localStorage.getItem('token'),
    },
    ...options,
  })

}

export default ApiClient;
