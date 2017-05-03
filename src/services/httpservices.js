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
    return axios.post(baseUrl + url, payload)
    console.log('initialising post')
    .then(function(response) {
      return response.data
    })
  }
}

export default service;