import { FC } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../pages/Home';
import Data
 from '../pages/Home/Data';
const AppRouter: FC = (): JSX.Element => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/data' element={<Data />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default AppRouter;