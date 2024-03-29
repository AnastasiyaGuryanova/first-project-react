import logo from './logo.svg';
import './App.css';
import React from 'react';

export const App = () => {
	return React.createElement('div', {
		className: 'App',
		children: React.createElement('header', {
			className: 'App-header',
			children: [
				React.createElement('img', {
					src: logo,
					className: 'App-logo',
					alt: 'logo',
				}),

				React.createElement('p', {
					children: [
						'Edit ',
						React.createElement('code', {
							children: 'src/App.js',
						}),
						' and save to reload.',
					],
				}),

				React.createElement('a', {
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
					children: 'Learn React',
				}),

				React.createElement('p', { children: new Date().getFullYear() }),
			],
		}),
	});
};
