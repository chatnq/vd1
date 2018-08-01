export const apiBaseURL = 'http://192.168.9.42:8765/api/v1/cart-confirmed'
const BASE_URL = 'http://192.168.9.42:8765' // 'http://192.168.14.177:8765'
const BASE_URL_IMAGE = 'http://192.168.9.42:8765/api/i'
const Constants = {
  BASE_URL,
  BASE_URL_IMAGE,
  GET_TOKEN: `${BASE_URL}/uaa/oauth/token`,
  AUTH_BASIC: {
    username: 'goserivce',
    password: 'demo',
  },
  MAP_API: '',
  GOOGLE_URL:
    'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA7JQ8rgnIXIDUP3fdYN7tyyqozRqyNjAc',
  ACCESS_TOKEN:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZ29zZXJ2aWNlLWFwaSJdLCJ1c2VyX25hbWUiOiJwb2tlbW9uIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sInVzZXJfa2V5IjoiYTRhMDg0ZDYxNDk1NDBhNWFhZmFiMzZmYWM1NzMwOTkiLCJleHAiOjE1MzE4OTY2NzEsImF1dGhvcml0aWVzIjpbIlJPTEVfQ1JFQVRFX0NBUlRfRlJPTV9DQVRFU0VSVklDRSIsIlJPTEVfU0VORF9PVFBfQ09ERSIsIlJPTEVfQ1JFQVRFX0NVU1RPTUVSIiwiUk9MRV9BRE1JTiIsIlJPTEVfRkVUQ0hfQURNSU5JU1RSQVRJVkVfVU5JVCJdLCJqdGkiOiIzOTdhMWM0NC1lNDUyLTQ0OTQtYjY4NS0yZmIyYjVkMzljNzUiLCJjbGllbnRfaWQiOiJnb3NlcnZpY2UifQ.eEoE1EmJ__k8_fieo8uEyvdy9IiDQE32IrsOrxKLNF-obF38nNCQEkf24Dyy_uY9Pfa2P6sJeKPiKnVErAO06gF6kmc9gMXkyP4_oUYlh_i_5wEktDqGTo4JoZiqEqioVNweGkHhBZAAPFQJ3DFd6X-BIN2xweqUGYcwNH-aPaysbbN1pdVZrK4kvFQGr7nJ1C8Wpi-wnzR3KNdOcSiuPKUTXvj2Leq65AN5GdWL2K26v9MBWQ9DT0pv2YfYjq7CjYbaYqnTZk37PtCe6vf23eU6iReaCBkRgmOcrXqvNIPnTTM2EjzLgz9iRuhHt8l6VErG0MOyB2cw_CIqXb3irA',
  GET_CATEGORY: `${BASE_URL}/api/v1/categories/002`,
  GET_OTP: `${BASE_URL}/api/v1/login-otp`,
  GET_ADDRESS: `${BASE_URL}/api/v1/profile/list-address`,
  GET_ADMINISTRATIVE: `${BASE_URL}/api/v1/administrative-units`,
  GET_SERVICES: `${BASE_URL}/api/v1/services?area_code=01`,
  GET_QUESTION_SERVICES: `${BASE_URL}/api/v1/service-questions`,
  GET_ANSWERS_SERVICES: `${BASE_URL}/api/v1/question-answers`,
  // get homesize + homestyle
  GET_HOME_SIZE: `${BASE_URL}/api/v1/question-answers`,
  // Accept quote - Chọn một trong số các providers đang quote
  POST_ACCEPT_QUOTE: `${BASE_URL}/api/v1/cart/accept-quote/`,
  // "delete a cart - người dùng bỏ dở quy trình đặt dịch vụ"
  DELETE_CART: `${BASE_URL}/api/v1/cancel-cart/`,
  // Create a cart
  CREATE_CART: `${BASE_URL}/api/v1/cart/002`,
  // Confirm Carts
  PUT_CONFIRM_CART: `${BASE_URL}/api/v1/confirm-cart/002`,
}

export default Constants
