  
import axios from "axios";
import API_KEY from './keys'
const BASE_URL =`https://ipfind.co/?ip=196.21.104.1&auth=${API_KEY}`;
const instance = axios.create({
  baseURL: BASE_URL,
});
export default instance;