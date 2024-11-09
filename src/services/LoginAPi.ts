import {apiClient} from './apiClient';

const LoginApi = async (credentials: {email: string; password: string}) => {
	try {
		const resposnse = apiClient.post('/login', credentials);

		return (await resposnse).data;
	} catch (error) {
		console.log(error);
	}
};

export {LoginApi};
