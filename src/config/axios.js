import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_PATH,
	method: 'POST',
});

instance.interceptors.request.use(config => {


	return config;
});

export default instance;
