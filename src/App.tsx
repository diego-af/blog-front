import {Outlet} from 'react-router-dom';
import {Header} from './components/Header';

const App = () => {
	return (
		<div className='flex w-full '>
			<div className='w-full flex flex-col'>
				<Header />

				<Outlet />
			</div>
		</div>
	);
};

export default App;
