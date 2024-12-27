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
	logout: () => void;
	setUser: (user: User) => void;
	setError: (error: boolean) => void;
	error: boolean;
}
const useAuthStore = create<AuthState>((set) => ({
	user: null,
	token: null,
	setUser: (user: User) => set({user: user}),
	isAuthenticated: false,
	error: false,
	setError: (error: boolean) => set({error: error}),
	logout: () => {
		set({
			user: null,
			token: null,
			isAuthenticated: false
		});
		localStorage.removeItem('token');
	}
}));

export {useAuthStore};
