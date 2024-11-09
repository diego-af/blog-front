import {useGetPost} from './getPost';

export const usePost = () => {
	const {data, loading, error} = useGetPost('http://localhost:3000/posts');

	return {data, loading, error};
};
