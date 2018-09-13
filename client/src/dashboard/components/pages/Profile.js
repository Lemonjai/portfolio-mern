import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TextFieldGroup from '../common/TextFieldGroup'

class Profile extends Component{

    state = {
        displaySocialInputs: false,
        handle: '',
        company: '',
        location: '',
        status: '',
        skills: '',
        bio: '',
        github: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: '',
        errors: {}
    }

    render(){
        return(
            <main id="profile">
            <h1 className="lg-heading">
                Create <span className="text-secondary"><strong>Profile</strong></span>
            </h1>

            <form className="wrapper">

                <TextFieldGroup
                    type="text"
                    placeholder="Enter your handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                />

                <button type="submit">Submit</button>
            </form>

            </main>
        )
    }
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(null)(Profile)