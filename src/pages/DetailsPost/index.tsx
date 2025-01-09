import {apiClient} from '@/services/apiClient';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {IPost} from '../types/Post';

const DetailsPost = () => {
	const {id} = useParams();
	const [data, setData] = useState<IPost>({} as IPost);

	useEffect(() => {
		const getPost = async () => {
			const response = await apiClient.get(`/post/${id}`);

			setData(response.data.post);
		};

		getPost();
	}, []);

	return (
		<div className='w-full h-full  flex flex-col items-center text-start  gap-4  p-4 xl:px-20'>
			<div className='md:m-w-[800px] flex flex-col gap-4'>
				<div
					className={`bg-cover bg-center w-full md:m-w-[800px] h-[300px] object-contain relative`}
					style={{backgroundImage: `url(${data.imageUrl})`, opacity: 0.8}}
				>
					<div className='absolute top-[60%] left-[4%] w-full'>
						<h1 className='text-2xl text-white font-bold' data-testid='title'>
							{data.title}
						</h1>
						<p className='text-white text-sm'>{data.description}</p>
					</div>
				</div>
				<div className=' flex  '>
					{data && data.content && (
						<div
							dangerouslySetInnerHTML={{__html: data.content}}
							className=' w-full m-w-[800px] md:w-[800px]'
						></div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DetailsPost;
