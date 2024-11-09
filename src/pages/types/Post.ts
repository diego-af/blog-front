export interface IPost {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	content: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface PostsInterface {
	data: IPost[];
}
