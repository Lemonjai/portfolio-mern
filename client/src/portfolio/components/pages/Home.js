import React, {Component} from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class Home extends Component {

    componentDidMount = () => {
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/admin/dashboard')
        }
    }
    
    render(){
        return (
            <main id="home">
                <h1 className="lg-heading">
                    Leo <span className="text-secondary">Cheung</span>
                </h1>
                <h2 className="sm-head">
                    Web Developer, Programmer &amp; Adventurer
                </h2>
                <div className="icons">
                    <a href="#!">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#!">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#!">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="#!">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </main>
        )
    }
}

Home.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Home)
