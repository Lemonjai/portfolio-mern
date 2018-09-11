import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Portfolio Nav & Footer
import Navbar from './portfolio/components/pages/Navbar'
import Footer from './portfolio/components/layouts/Footer'

// Portfolio Components
import Home from './portfolio/components/pages/Home'
import About from './portfolio/components/pages/About'
import Contact from './portfolio/components/pages/Contact'
import Work from './portfolio/components/pages/Work'

// Dashboard Components
import Login from './dashboard/Login'
import Register from './dashboard/Register'

import './portfolio/styles/main.css'

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/about' component={ About } />
                    <Route exact path='/contact' component={ Contact } />
                    <Route exact path='/work' component={ Work } />
                    <Route exact path='/admin/login' component={ Login } />
                    <Route exact path='/admin/register' component={ Register } />
                    <Footer />
                </Fragment>
            </Router>
        )
    }
}

export default App