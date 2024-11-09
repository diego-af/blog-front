import axios, {AxiosError} from 'axios';
import {AuthToken} from './AuthToken';

const setupApiClient = () => {
	const token = localStorage.getItem('token');
	const api = axios.create({
		baseURL: 'http://localhost:3000',
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
	api.interceptors.response.use(
		(respose) => {
			return respose;
		},
		(error: AxiosError) => {
			if (error.response?.status === 401) {
				if (typeof window !== 'undefined') {
					// signOut();
				} else {
					return Promise.reject(new AuthToken());
				}
			}

			return Promise.reject(error);
		}
	);

	return api;
};

export {setupApiClient};
