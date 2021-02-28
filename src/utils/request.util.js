import axios from 'axios'

import { API_BASE_URL } from '../constants/api.const'

// create axios instance of HTTP client.
const client = axios.create({ baseURL: API_BASE_URL })

// request wrapper.
function request(options) {
  // success handler
  function onSuccess (response) {
    console.log('Request Success !')
    console.log(response)
    return response
  }

  // failed handler
  function onFailed (error) {
    console.log('Request Failed !')
    console.log(error)

    return Promise.reject(error)
  }

  return (
    client(options)
      .then(onSuccess) // success
      .catch(onFailed) // failed
  )
} 

export default request