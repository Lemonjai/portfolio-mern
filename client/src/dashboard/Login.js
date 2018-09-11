import React, {Component} from 'react'
import { withRouter } from "react-router-dom"
import axios from 'axios'

class Login extends Component {

    state = {
        email: '',
        password: '',
        errors:{}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/users/login', newUser)
            .then(res => {
                // Save the token to local storage
                const { token } = res.data
                // Storage the token in local storage
                localStorage.setItem('jwtToken', token)
                // Set token to Auth header
                // setAuthToken(token)
                this.props.history.push('/admin/dashboard')
                }
            )
            .catch(err => this.setState({
                errors: err.response.data
            }))
    }

    render(){
        return(
            <main id="login">
                <h1 className="lg-heading">
                    Log<span className="text-secondary"><strong>in</strong></span>
                </h1>

                <form className="wrapper" onSubmit={this.onSubmit}>
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="eg. johnsmith@smith.com"
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                    <label>Password</label>
                    <input 
                        type="password"
                        placeholder="eg. test1234"
                        name="password"   
                        value={this.state.password} 
                        onChange={this.onChange}
                    />
                    <button type="submit">Submit</button>
                </form>

            </main>
        )
    }
}

export default (withRouter(Login))