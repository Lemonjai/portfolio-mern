import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'


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
                        <Route exact path='/admin/dashboard' component={Dashboard} />
                        <Route exact path='/admin/profile' component={Profile} />
                        <Footer />
                    </Fragment>
                </Router>
            </Provider>
        )
    }
}

export default App