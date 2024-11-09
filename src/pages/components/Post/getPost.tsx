import {useEffect, useState} from 'react';
import axios from 'axios';

const useGetPost = (url: string) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);

	const getPost = async () => {
		setLoading(true);
		try {
			const response = await axios.get(url);
			setData(response.data.post);
			setLoading(false);
		} catch (error) {
			setError(true);
			setLoading(false);
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	return {data, loading, error};
};

export {useGetPost};
