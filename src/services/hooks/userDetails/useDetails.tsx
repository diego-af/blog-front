import {useQuery} from '@tanstack/react-query';
import {getUserDetails} from './getuserDetails';
import {useAuthStore} from '@/store/store';
import {useEffect} from 'react';

const useDetails = () => {
	const {setUser} = useAuthStore();

	const {data, isLoading, isError} = useQuery({
		queryKey: ['userDetails'],
		queryFn: getUserDetails,
		refetchOnWindowFocus: true
	});

	useEffect(() => {
		if (data) {
			setUser({
				name: data.name,
				email: data.email,
				token: data.token
			}); // Atualiza o estado do Zustand
		}
	}, [data, setUser]);

	return {
		data,
		isLoading,
		isError
	};
};

export {useDetails};
