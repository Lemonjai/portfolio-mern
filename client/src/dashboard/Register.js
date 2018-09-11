import React, {Component} from 'react'

class Register extends Component {

    render(){
        return(
            
            <main id="login">
                <h1 className="lg-heading">
                    Regis<span className="text-secondary"><strong>ter</strong></span>
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

export default Register