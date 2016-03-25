/**
*	Super basic route setup that lets you have separate containers for your
* application and site.
**/
import React from "react";
import {Router, Route, IndexRoute} from "react-router";

// Marketing site
import SiteContainer from "./SiteContainer";
import Homepage from 'components/Site/Homepage/Homepage';
import Process from 'components/Site/Process/Process';
import Portfolio from 'components/Site/Portfolio/Portfolio';
import Speaking from 'components/Site/Speaking/Speaking';

// Application
import AppContainer from "./AppContainer";
import MainScreen from 'components/App/MainScreen/MainScreen';

module.exports = (
	<Router>
		{/*Marketing site*/}
		<Route path="/" component={SiteContainer}>
			<IndexRoute component={Homepage} />
			<Route path="doing" component={Process} />
      <Route path="making-stuff" component={Portfolio} />
      <Route path="speaking" component={Speaking} />
		</Route>

		{/*Application*/}
		<Route path="/app" component={AppContainer}>
			<IndexRoute component={MainScreen} />
		</Route>
	</Router>
);
