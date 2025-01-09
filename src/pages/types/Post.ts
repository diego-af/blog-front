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

export interface IUser {
	data: {
		id: number;
		name: string;
		email: string;
		role: string;
		token: string;
	};
}
