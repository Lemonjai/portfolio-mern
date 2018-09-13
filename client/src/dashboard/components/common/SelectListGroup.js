import React, {Fragment} from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'

const SelectListGroup = ({
    name,
    value,
    error,
    info,
    onChange,
    options
}) => {

    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ))

    return(
        <Fragment>
            <select
                name={name}
                value={value}
                onChange={onChange}
            >
                {selectOptions}
            </select>
        </Fragment>
    )    
}

SelectListGroup.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    info: propTypes.string,
    onChange: propTypes.func.isRequired,
    options: propTypes.array.isRequired
}

export default SelectListGroup