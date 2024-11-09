import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useAuthStore} from './store';

import {LoginApi} from '@/services/LoginAPi';
import {useNavigate} from 'react-router-dom';
export interface ApiError {
	response?: {
		data?: {
			message?: string;
			statusCode?: number;
		};
		status?: number;
	};
	message: string;
}
export const useAuth = () => {
	// const queryClient = useQueryClient();
	const {user, setUser, token, isAuthenticated, logout} = useAuthStore();
	const navigate = useNavigate();

	const loginMutation = useMutation({
		mutationFn: LoginApi,
		onSuccess: (data: any) => {
			// Atualiza o estado do Zustand com os dados do usuário

			setUser({
				name: data.data.name,
				email: data.data.email,
				token: data.data.token
			});
			localStorage.setItem('token', data.data.token);
			console.log(data.data);

			// Invalida queries relevantes
			// queryClient.invalidateQueries({queryKey: ['user']});
			navigate('/home');
		},
		onError: (error: ApiError) => {
			console.error('Erro no login:', error?.response?.data?.message);
			logout();
		}
	});

	return {
		user,
		token,
		isAuthenticated,
		login: loginMutation.mutate,
		logout,
		isLoading: loginMutation.isPending,
		error: loginMutation.error
	};
};
