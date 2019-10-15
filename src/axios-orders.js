import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burgerbuilder-b89a9.firebaseio.com/'
});

export default instance;