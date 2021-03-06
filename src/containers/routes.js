/**
*	Super basic route setup that lets you have separate containers for your
* application and site.
**/
import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

// Marketing site
import SiteContainer from "./SiteContainer";
import Homepage from 'components/Site/Homepage/Homepage';
import Process from 'components/Site/Process/Process';
import Portfolio from 'components/Site/Portfolio/Portfolio';
import Speaking from 'components/Site/Speaking/Speaking';
import Hire from 'components/Site/Hire/Hire';
import Blog from 'components/Site/Blog/Blog';
import Post from 'components/Site/Post/Post';
import About from 'components/Site/About/About';
import Lab from 'components/Site/Lab/Lab';

// Application
import AppContainer from "./AppContainer";
import MainScreen from 'components/App/MainScreen/MainScreen';

module.exports = (
	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
		{/*Marketing site*/}
		<Route path="/" component={SiteContainer}>
			<IndexRoute component={Homepage} />
			<Route path="doing" component={Process} />
      <Route path="making-stuff" component={Portfolio} />
      <Route path="speaking" component={Speaking} />
      <Route path="writing" component={Blog} />
      <Route path="experimenting" component={Lab} />
      <Route path="talking-about-himself-again" component={About} />
      <Route path="writing/about/:slug" component={Post} />
		</Route>

		{/*Application*/}
		<Route path="/making-stuff/for-you" component={AppContainer}>
			<IndexRoute component={Hire} />
		</Route>
	</Router>
);
