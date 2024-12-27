import {useNavigate} from 'react-router-dom';
import {Post} from '../components/Post';
import {usePost} from '../components/Post/usePost';
import {useDetails} from '@/services/hooks/userDetails/useDetails';

export const Home = () => {
	const {loading, error} = usePost();
	const token = localStorage.getItem('token');
	const navigate = useNavigate();
	const {data} = useDetails();

	if (!token) {
		navigate('/login');
		return;
	}

	if (loading) {
		return <div>Carregando...</div>;
	}

	if (error) {
		return <div>Error</div>;
	}
	return (
		<div className='w-full  h-full flex flex-col p-4 justify-center items-center'>
			<Post />
		</div>
	);
};
