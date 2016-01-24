import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App'
import List from './components/List';
import Detail from './components/Detail';

const routes = (
	<Route path='/' component={ App }>
		<IndexRoute component={ List } />
		<Route path='location/:node' component={ Detail } />
	</Route>
	);

export default routes;