import {Card, CardContent} from '@/components/ui/card';
import {IPost} from '@/pages/types/Post';
import {Link} from 'react-router-dom';

export const PostItem = ({data}: {data: IPost}) => {
	return (
		<Card className=' hover:transform hover:scale-105 cursor-pointer border border-zinc-100  '>
			<CardContent className=' w-full  h-[280px] p-3 flex flex-col '>
				<div className='w-full h-[300px]'>
					<img
						src={data.imageUrl}
						className=' w-full h-[100px] object-cover rounded'
					/>

					<p className='text-md font-bold text-zinc-600 m-0 text-start'>
						{data.title}
					</p>

					<span className='text-sm text-zinc-400'>{data.description}</span>
				</div>

				<Link to='/home' className='text-md text-red-500 hover:underline'>
					Ler artigo
				</Link>
			</CardContent>
		</Card>
	);
};
