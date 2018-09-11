import React, {Component} from 'react'

class Register extends Component {

    state = {
        firstName: '',
        secondName: '',
        email: '',
        avatar: '',
        password: '',
        password2: '',
        errors: {}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <main id="register">
                <h1 className="lg-heading">
                    Regis<span className="text-secondary"><strong>ter</strong></span>
                </h1>

                <form className="wrapper">
                    <label>First Name</label>
                    <input 
                        type="text"
                        placeholder="eg. John"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange}
                    />

                    <label>Last Name</label>
                    <input
                        type="text"
                        placeholder="eg. Smith"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onChange}
                    />

                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder="eg. johnsmith@smith.com"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                    />

                    <label>Avatar</label>
                    <input 
                        type="text"
                        placeholder="eg. https://www.avatar.com/john"
                        name="avatar"
                        value={this.state.avatar}
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

                    <label>Confirm Password</label>
                    <input 
                        type="password"
                        placeholder="eg. test1234"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                    />

                    <button type="submit">Submit</button>
                </form>

            </main>
        )
    }
}

export default Register