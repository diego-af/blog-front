import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {RouterProvider} from 'react-router-dom';
import {router} from './routes/routes.tsx';
import {ClerkProvider} from '@clerk/clerk-react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log(PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key');
}
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</ClerkProvider>
	</React.StrictMode>
);
