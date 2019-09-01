import axios from 'axios';


const instance = axios.create({
  //baseURL: 'http://localhost:3300',
  baseURL: 'http://3.83.247.178:3300',
  // timeout: 1000,
  //headers: {'Authorization': 'foobar'}
});

export default instance;