import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    state = {
        menu: false
    }

    buttonChange = () => {
        this.setState({ menu: !this.state.menu})
    }

    render(){
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
                </div>
            </header>
        )
    }
}

export default Navbar