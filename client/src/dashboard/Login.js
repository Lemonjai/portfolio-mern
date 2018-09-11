import React, {Component} from 'react'

class Login extends Component {

    render(){
        return(
            
            <main id="login">
                <h1 className="lg-heading">
                    Log<span className="text-secondary"><strong>in</strong></span>
                </h1>

                <form className="wrapper">
                    <label>Email</label>
                    <input type="email"/>
                    <label>Password</label>
                    <input type="password"/>
                    <input type="submit"/>
                </form>

            </main>
        )
    }
}

export default Login