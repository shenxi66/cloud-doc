import React from 'react'
import PropTypes from 'prop-types'

const BottomBtn = ({ text, colorClass, icon, onBtnClick }) => (
    <button
        style={{ display: 'block', width: '100%'}}
        type="button"
        className={`btn btn-block no-border ${colorClass}`}
        onClick={onBtnClick}
    >
        {icon}
        {text}
    </button>
)

BottomBtn.propTypes = {
    text: PropTypes.string,
    colorClass: PropTypes.string,
    onBtnClick: PropTypes.func,
    icon: PropTypes.element.isRequired
}

export default BottomBtn