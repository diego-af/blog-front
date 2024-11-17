import {describe, it, expect, beforeAll, afterAll, vi} from 'vitest';
import {screen, render, waitFor} from '@testing-library/react';
import DetailsPost from '@/pages/DetailsPost';
import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';
import {BrowserRouter} from 'react-router-dom';

vi.mock('react-router-dom', async () => {
	const actual = await vi.importActual('react-router-dom');
	return {
		...actual,
		useParams: () => ({
			id: '2'
		})
	};
});

const handlers = [
	http.get(`localhost:3000/post/3`, () => {
		return HttpResponse.json();
	})
];

const server = setupServer(...handlers);

describe('DetailsPost', () => {
	beforeAll(() => server.listen());

	it('should render', async () => {
		screen.debug();

		await waitFor(() => {
			// Debug novamente após a espera
			screen.debug();
		});
		render(
			<BrowserRouter>
				<DetailsPost />
			</BrowserRouter>
		);

		const titleElement = await screen.findByText(
			'A teologia reformada destaca a soberania absoluta de Deus sobre todas as coisas, uma perspectiva profundamente explorada por João Calvino.'
		);
		expect(titleElement).toBeTruthy();
	});

	afterAll(() => server.close());
});
