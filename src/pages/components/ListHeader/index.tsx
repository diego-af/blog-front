import {items} from '@/pages/constants';
import {Link} from 'react-router-dom';

const ListHeader = () => {
	return (
		<div className=' flex gap-4 '>
			{items.map((item) => (
				<Link
					to={item.url}
					className='group text-zinc-600 text-xl from-neutral-500 hover:text-zinc-600 relative '
				>
					<div className=' hidden group-hover:block absolute bottom-0 w-full h-1 bg-neutral-200'></div>

					{item.title}
				</Link>
			))}
		</div>
	);
};

export default ListHeader;
