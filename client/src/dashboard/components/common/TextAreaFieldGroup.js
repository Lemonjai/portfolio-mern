import React, {Fragment} from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'

const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    error,
    info,
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

TextAreaFieldGroup.propTypes = {
    name: propTypes.string.isRequired,
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    info: propTypes.string,
    onChange: propTypes.func.isRequired
}

export default TextAreaFieldGroup