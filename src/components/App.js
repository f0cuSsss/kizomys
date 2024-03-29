import React from 'react'
import { Router, Route } from 'react-router'

import Header from './Header'
import AboutUsPage from './pages/AboutUsPage'
import BoatsPage from './pages/BoatsPage'
import RoomsPage from './pages/RoomsPage'
import ServicesPage from './pages/ServicesPage'
import Footer from './Footer'
import history from '../history'
import '../styles/index.css'

export const App = () => {
    return (
        <div className="wrapper">
            <Router history={history}>
                <React.Fragment>
                    <Header />
                    <content>
                        <Route path="/" exact component={AboutUsPage} />
                        <Route path="/boats" exact component={BoatsPage} />
                        <Route path="/rooms" exact component={RoomsPage} />
                        <Route path="/services" exact component={ServicesPage} />
                    </content>
                    <Footer />
                </React.Fragment>
            </Router>
        </div>
    );
}