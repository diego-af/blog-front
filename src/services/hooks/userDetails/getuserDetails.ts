import {apiClient} from '@/services/apiClient';

const getUserDetails = async () => {
	try {
		const response = await apiClient.get('/me');

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export {getUserDetails};
