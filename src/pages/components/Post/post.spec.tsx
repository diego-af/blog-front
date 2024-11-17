import {describe, it, expect, vi} from 'vitest';

import {screen, render, fireEvent} from '@testing-library/react';
import {PostItem} from './PostItem';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Post', () => {
	const data = {
		id: 1,
		title: 'Calvino e a reforma do blog',
		description: 'Mudança de paradigma',
		imageUrl: 'Teste',
		content: 'Teste'
	};
	it('Should render', () => {
		render(
			<Router>
				<PostItem data={data} />
			</Router>
		);

		expect(screen.getByText('Ler artigo')).toBeTruthy();
	});

	it('Show title card', () => {
		render(
			<Router>
				<PostItem data={data} />
			</Router>
		);

		expect(screen.getByText('Calvino e a reforma do blog')).toBeTruthy();
	});

	it('Show description card', () => {
		render(
			<Router>
				<PostItem data={data} />
			</Router>
		);

		expect(screen.getByText('Mudança de paradigma')).toBeTruthy();
	});

	it('Click in the button', () => {
		const handleClick = vi.fn();

		render(
			<Router>
				<PostItem data={data} />
			</Router>
		);

		fireEvent.click(screen.getByText('Ler artigo'));

		expect(handleClick).toHaveBeenCalledTimes(0);
	});
});
