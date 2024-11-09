import {Outlet} from 'react-router-dom';

import {SidebarPage} from './components/Sidebar';
import {SidebarProvider} from './components/ui/sidebar';
import {Header} from './components/Header';

const App = () => {
	return (
		<SidebarProvider defaultOpen>
			<div className='flex w-full '>
				<SidebarPage />
				<div className='w-full flex flex-col'>
					<Header />

					<Outlet />
				</div>
			</div>
		</SidebarProvider>
	);
};

export default App;
