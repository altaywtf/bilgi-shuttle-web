/** App Routes */

import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Detail, About } from './containers';

function getRoutes(store) {
	return (
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
      <Route path="location/:node" component={ Detail } />
      <Route path="about" component={ About } />
	  </Route>
	)
};

export { getRoutes };
