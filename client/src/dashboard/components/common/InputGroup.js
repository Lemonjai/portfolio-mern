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
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Fragment>
    )    
}

InputGroup.propTypes = {
    name: propTypes.string.isRequired,
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired
}

export default InputGroup