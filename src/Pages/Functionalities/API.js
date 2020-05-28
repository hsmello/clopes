let APIBaseUrl = "http://localhost:3001";

if (process.env.NODE_ENV === 'production') {
    APIBaseUrl = 'https://clopes-api.herokuapp.com'
} 

export default APIBaseUrl;