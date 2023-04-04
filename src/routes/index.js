import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../utils/constants';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Service from '../pages/Services';
import Blogs from './../pages/Blogs/index';
import Contact from './../pages/Contact/index';

const RootRouter = () => {
	return (
		<Routes>
			<Route path={`${routerConfig.home}`} element={<HomePage />} />
			<Route path={`${routerConfig.about_us}`} element={<AboutUs />} />
			<Route path={`${routerConfig.services}`} element={<Service />} />
			<Route path={`${routerConfig.blogs}`} element={<Blogs />} />
			<Route path={`${routerConfig.contact}`} element={<Contact />} />
		</Routes>
	);
};

export default RootRouter;
