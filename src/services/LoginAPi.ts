import {toast} from 'sonner';
import {apiClient} from './apiClient';

const LoginApi = async (credentials: {email: string; password: string}) => {
	try {
		const resposnse = apiClient.post('/login', credentials);

		return (await resposnse).data;
	} catch (error: any) {
		toast.error(error?.response?.data?.message, {
			duration: 5000,
			className: 'bg-red-500',
			position: 'top-center'
		});

		console.log(error?.response?.data?.message, 'api.ts');
	}
};

export {LoginApi};
