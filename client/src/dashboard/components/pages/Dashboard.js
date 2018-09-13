import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCurrentProfile } from '../../../redux/actions/profileActions'

class Dashboard extends Component{
    render(){
        return(
            <div>
                Dashboard
            </div>
        )
    }
}

export default Dashboard