import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App'
import List from './components/List';
import Detail from './components/Detail';
import About from './components/About';

const routes = (
	<Route path='/' component={App}>
		<IndexRoute component={List} />
		<Route path='location/:node' component={Detail} />
		<Route path='about' component={About} />
	</Route>
	);

export default routes;
