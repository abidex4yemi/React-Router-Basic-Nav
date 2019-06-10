import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const routeDetails = [
	{
		id: 1,
		path: '/',
		ComponentToRender: Home
	},
	{
		id: 2,
		path: '/about',
		ComponentToRender: About
	},
	{
		id: 3,
		path: '/contact',
		ComponentToRender: Contact
	}
];

const App = () => (
	<div>
		<Navigation />
		{routeDetails.map(({ id, path, ComponentToRender }) => {
			return <Route key={id} exact path={path} component={ComponentToRender} />;
		})}
	</div>
);

export default App;
