import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import { Provider } from 'react-redux'

import store from './store'
import setAuthToken from './redux/util/setAuthToken'
import {setCurrentUser, logoutUser} from './redux/actions/authActions'
import PrivateRoute from './dashboard/components/common/PrivateRoute'


// Portfolio Nav & Footer
import Navbar from './portfolio/components/layouts/Navbar'
import Footer from './portfolio/components/layouts/Footer'

// Portfolio Components
import Home from './portfolio/components/pages/Home'
import About from './portfolio/components/pages/About'
import Contact from './portfolio/components/pages/Contact'
import Work from './portfolio/components/pages/Work'

// Dashboard Components
import Login from './dashboard/components/pages/Login'
import Register from './dashboard/components/pages/Register'
import Dashboard from './dashboard/components/pages/Dashboard'
import Profile from './dashboard/components/pages/Profile'

// CSS for everything
import './portfolio/styles/main.css'
import { clearCurrentProfile } from './redux/actions/profileActions';

// Check for token
if(localStorage.jwtToken){
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken)
    // Decoded token and get user info and expiration
    const decoded = jwt_decode(localStorage.jwtToken)
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded))

    // Check for expired token
    const currentTime = Date.now() / 1000
    if(decoded.exp < currentTime){
        // Logout user
        store.dispatch(logoutUser())
        // Clear current profile
        store.dispatch(clearCurrentProfile)
        // Redirect to home page
        window.location.href='/'
    }
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Navbar />
                        <Route exact path='/' component={ Home } />
                        <Route exact path='/about' component={ About } />
                        <Route exact path='/contact' component={ Contact } />
                        <Route exact path='/work' component={ Work } />
                        <Route exact path='/admin/login' component={ Login } />
                        <Route exact path='/admin/register' component={ Register } />
                        <Switch>
                            <PrivateRoute exact path='/admin/dashboard' component={Dashboard} />
                            <PrivateRoute exact path='/admin/profile' component={Profile} />
                        </Switch>
                        <Footer />
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}

export default App