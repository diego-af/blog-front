import {useMutation} from '@tanstack/react-query';
import {useAuthStore} from './store';

import {LoginApi, RegisterApi} from '@/services/LoginAPi';
import {useNavigate} from 'react-router-dom';
import {toast} from 'sonner';

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
			setUser({
				name: data?.data.name,
				email: data?.data.email,
				token: data?.data.token
			});
			localStorage.setItem('token', data.data.token);

			// Invalida queries relevantes
			// queryClient.invalidateQueries({queryKey: ['user']});
			navigate('/home');
		},
		onError: (error: ApiError) => {
			console.error('Erro no login aq:', error);

			toast.error(error?.response?.data?.message);
			logout();
		}
	});
	const registerMutation = useMutation({
		mutationFn: RegisterApi,
		onSuccess: () => {
			navigate('/login');
		},
		onError: (error: ApiError) => {
			console.error('Erro no login aq:', error);

			toast.error(error?.response?.data?.message);
			logout();
		}
	});

	return {
		user,
		token,
		isAuthenticated,
		login: loginMutation.mutate,
		logout,

		register: registerMutation.mutate,
		isLoading: loginMutation.isPending,
		error: loginMutation.error
	};
};
