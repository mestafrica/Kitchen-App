import axios from 'axios'

var baseUrl = 'https://mest-kitchen-app.herokuapp.com/v1';

var service = {
  get: function(url) {
    return axios.get(baseUrl + url)
    .then(function(response) {
      return response.data
    })
  },
  post: function(url, payload) {
    console.log(payload);
    return axios.post(baseUrl + url, payload)
    .then(function(response) {
      console.log(response)
      return response.data
    })
  }
}

export default service;
