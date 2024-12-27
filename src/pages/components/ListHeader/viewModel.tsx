import {useDetails} from '@/services/hooks/userDetails/useDetails';
import {useState} from 'react';

const useListHeaderViewModel = () => {
	const [itemSelected, setItemSelected] = useState('Home');

	const {data} = useDetails();
	return {itemSelected, setItemSelected, data};
};

export {useListHeaderViewModel};
