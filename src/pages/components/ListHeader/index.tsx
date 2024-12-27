import {items} from '@/pages/constants';

import {Link} from 'react-router-dom';
import {useListHeaderViewModel} from './viewModel';
const ListHeader = () => {
	const {itemSelected, setItemSelected} = useListHeaderViewModel();

	return (
		<div className=' flex gap-4 space-x-0 '>
			{items.map((item) => (
				<Link
					key={item.title}
					to={item.url}
					className={' group relative text-neutral-500 hover:text-neutral-700'}
					onClick={() => setItemSelected(item.title)}
				>
					<div
						className={`${
							itemSelected === item.title
								? 'group-hover:block absolute bottom-0 w-full h-1 bg-neutral-400'
								: 'group-hover:block absolute bottom-0 w-full h-1 bg-neutral-200'
						}`}
					></div>

					{item.title}
				</Link>
			))}
		</div>
	);
};

export default ListHeader;
