import React, {Fragment} from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'

const InputGroup = ({
    name,
    placeholder,
    value,
    error,
    icon,
    type,
    onChange
}) => {
    return(
        <Fragment>
            <i className={icon} />
            <input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Fragment>
    )    
}

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

InputGroup.defaultProps = {
    type: 'text'
}

export default InputGroup