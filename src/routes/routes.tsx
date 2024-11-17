import App from '@/App';
import {CreatePost} from '@/pages/CreatePost';
import DetailsPost from '@/pages/DetailsPost';

import {Home} from '@/pages/Home/Home';
import Login from '@/pages/Login';

import {createBrowserRouter, Navigate, RouteObject} from 'react-router-dom';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <App />,
		errorElement: <div>404</div>,
		children: [
			{
				path: '/',
				element: <Navigate to='/home' />
			},
			{
				path: '/home',
				element: <Home />,
				errorElement: <div>404</div>
			},
			{
				path: '/create-post',
				element: <CreatePost />,
				errorElement: <div>404</div>
			},
			{
				path: '/post/:id',
				element: <DetailsPost />,
				errorElement: <div>404</div>
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	}
];

const router = createBrowserRouter(routes);

export {router};
