import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import {logoutUser } from '../../../redux/actions/authActions'
import {clearCurrentProfile } from '../../../redux/actions/profileActions'

class Navbar extends Component {

    state = {
        menu: false
    }

    buttonChange = () => {
        this.setState({ menu: !this.state.menu})
    }

    onLogoutClick = (e) => {
        e.preventDefault()
        localStorage.removeItem('jwtToken')
        this.props.clearCurrentProfile()
        this.props.logoutUser()
        window.location.href='/'
    }

    render(){

        const {isAuthenticated, user} = this.props.auth

        const authLinks = (
            <ul className={this.state.menu ? "menu-nav show" : "menu-nav"}>
                <li className={this.state.menu ? "nav-item show" : "nav-item"}> 
                    <Link to='/admin/dashboard' className="nav-link" onClick={this.buttonChange} >Dashboard</Link>
                </li>
                <li className={this.state.menu ? "nav-item show" : "nav-item"}>
                    <Link to='/admin/project' className="nav-link" onClick={this.buttonChange} >Project</Link>
                </li>
                <li className={this.state.menu ? "nav-item show" : "nav-item"}>
                    <Link to='/admin/profile' className="nav-link" onClick={this.buttonChange} >Profile</Link>
                </li>
                <li className={this.state.menu ? "nav-item show" : "nav-item"}>
                    <a href='#' className="nav-link" onClick={this.onLogoutClick} >Logout</a>
                </li>
            </ul>
        )

        const guestLinks = (
            <ul className={this.state.menu ? "menu-nav show" : "menu-nav"}>
                <li className={this.state.menu ? "nav-item show" : "nav-item"}> 
                    <Link to='/' className="nav-link" onClick={this.buttonChange} >Home</Link>
                </li>
                <li className={this.state.menu ? "nav-item show" : "nav-item"}>
                    <Link to='/about' className="nav-link" onClick={this.buttonChange} >About Me</Link>
                </li>
                <li className={this.state.menu ? "nav-item show" : "nav-item"}>
                    <Link to='/work' className="nav-link" onClick={this.buttonChange} >My Work</Link>
                </li>
                <li className={this.state.menu ? "nav-item show" : "nav-item"}>
                    <Link to='/contact' className="nav-link" onClick={this.buttonChange} >How to reach me</Link>
                </li>
            </ul>
        )

        return (
            <header>
                <div className={this.state.menu ? 'menu-btn open' : 'menu-btn'} 
                    onClick={this.buttonChange} 
                >
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>

                <div className={this.state.menu ? 'menu show' : 'menu'} >
                    <div className={this.state.menu ? "menu-branding show" : "menu-branding"}>
                        <div className="portrait"></div>
                    </div>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </header>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile})(Navbar)