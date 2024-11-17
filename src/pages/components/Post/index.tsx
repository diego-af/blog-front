import {IPost} from '@/pages/types/Post';
import {PostItem} from './PostItem';
import {usePost} from './usePost';

export const Post = () => {
	const {data, loading, error} = usePost();

	if (loading) {
		return <div>Carregando...</div>;
	}

	if (error) {
		return <div>Erro</div>;
	}
	return (
		<div className='w-full  md:max-w-[1200px] flex flex-col justify-center items-center'>
			<div className=' grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
				{data?.map((post: IPost) => (
					<PostItem key={post.id} data={{...post}} />
				))}
			</div>
		</div>
	);
};
