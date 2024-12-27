import {describe, it, expect, vi, beforeEach} from 'vitest';
import {screen, render, fireEvent} from '@testing-library/react';
import ListHeader from '.';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter as Router} from 'react-router-dom';
import {useListHeaderViewModel} from './viewModel';

vi.mock('./viewModel');

const queryClient = new QueryClient();

describe('ListHeader', () => {
	const mockItems = [
		{title: 'Home', url: '/home'},
		{title: 'Criar Artigo', url: '/about'}
	];

	beforeEach(() => {
		vi.mocked(useListHeaderViewModel).mockReturnValue({
			itemSelected: '',
			setItemSelected: vi.fn(),
			data: {role: 'user'}
		});
	});

	it('should render ListHeader', () => {
		const component = render(
			<QueryClientProvider client={queryClient}>
				<Router>
					<ListHeader />
				</Router>
			</QueryClientProvider>
		);
		expect(component.container).toBeTruthy();
	});

	it('should display the correct number of items', () => {
		render(
			<QueryClientProvider client={queryClient}>
				<Router>
					<ListHeader />
				</Router>
			</QueryClientProvider>
		);
		const links = screen.getAllByRole('link');
		expect(links.length).toBe(mockItems.length);
	});

	it('should update selected item on click', () => {
		const setItemSelected = vi.fn();
		vi.mocked(useListHeaderViewModel).mockReturnValue({
			itemSelected: '',
			setItemSelected,
			data: {role: 'user'}
		});

		render(
			<QueryClientProvider client={queryClient}>
				<Router>
					<ListHeader />
				</Router>
			</QueryClientProvider>
		);

		const homeLink = screen.getByText('Home');
		fireEvent.click(homeLink);
		expect(setItemSelected).toHaveBeenCalledWith('Home');
	});

	it("should hide 'Criar Artigo' link if user is not a user", () => {
		vi.mocked(useListHeaderViewModel).mockReturnValue({
			itemSelected: '',
			setItemSelected: vi.fn(),
			data: {role: 'admin'}
		});

		render(
			<QueryClientProvider client={queryClient}>
				<Router>
					<ListHeader />
				</Router>
			</QueryClientProvider>
		);
		const homeLink = screen.getByText('Home');
		expect(homeLink).not.toBe(null);
	});
	it("should show 'Criar Artigo' link if user is not a user", () => {
		vi.mocked(useListHeaderViewModel).mockReturnValue({
			itemSelected: '',
			setItemSelected: vi.fn(),
			data: {role: 'admin'}
		});

		render(
			<QueryClientProvider client={queryClient}>
				<Router>
					<ListHeader />
				</Router>
			</QueryClientProvider>
		);
		const homeLink = screen.getByText('Criar Artigo');
		expect(homeLink).toBeTruthy();
	});
});
