import {create} from 'zustand';

interface User {
	id?: string;
	email: string;
	name: string;
	token: string;
}

interface AuthState {
	user: User | null;
	token: string | null;
	isAuthenticated: boolean;
	login: (credentials: {email: string; password: string}) => Promise<void>;
	logout: () => void;
	setUser: (user: User) => void;
}
const useAuthStore = create<AuthState>((set) => ({
	user: null,
	token: null,
	setUser: (user: User) => set({user: user}),
	isAuthenticated: false,

	login: async (credentials: {email: string; password: string}) => {
		console.log('🚀 ~ login: ~ credentials:', credentials);
		// Esta função será substituída pelo hook useMutation

		throw new Error('Não implementado');
	},

	logout: () => {
		set({
			user: null,
			token: null,
			isAuthenticated: false
		});
	}
}));

export {useAuthStore};
