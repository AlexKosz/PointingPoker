import './App.css';
import './votingPage.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import Login from '../login/Login';
import {
	Route,
	Routes,
	unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import PointingRoom from '../pointingRoom/PointingRoom';
import { history } from '../../utils/navigator';
import paths from '../../utils/consts/paths';
import Header from '../../components/Header';

const AppRouter = () => {
	return (
		<>
			<Header />
			<HistoryRouter history={history}>
				<Routes>
					<Route
						path='/'
						element={<Login />}
					/>
					<Route
						path={paths.room}
						element={<PointingRoom />}
					/>
				</Routes>
			</HistoryRouter>
		</>
	);
};

AppRouter.propTypes = {};

export default AppRouter;
