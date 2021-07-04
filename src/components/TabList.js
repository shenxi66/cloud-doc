import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
    CloseOutlined
} from '@ant-design/icons'
import './TabList.scss'

const TabList = ({ files, activeId, unsaveIds, onTabClick, onCloseTab}) => {
  return (
    <ul className="nav nav-pills tablist-component">
        {files.map(file => {
            const withUnsavedMark = unsaveIds.includes(file.id)
            const fClassName = classNames({
                'nav-link': true,
                'active': file.id === activeId,
                'with-unsaved': withUnsavedMark
            })           

            return (
                <li className="nav-item" key={file.id}>
                    <a 
                        href="#"
                        className={fClassName}
                        onClick={e => {e.preventDefault(); onTabClick(file.id)}}
                    >
                        {file.title}
                        <span 
                            className="close-icon" 
                            style={{ marginLeft: 5 }}
                            // onClick={e => {e.preventDefault(); onCloseTab(file.id)}}
                        >
                            <CloseOutlined onClick={e => {e.stopPropagation(); onCloseTab(file.id)}} />
                        </span>
                        { withUnsavedMark && <span className='rounded-circle unsaved-icon'></span> }
                    </a>
                </li>
            )
        })}
    </ul>
  )
}

TabList.propTypes = {
    files: PropTypes.array,
    activeId: PropTypes.number,
    unsaveIds: PropTypes.array,
    onTabClick: PropTypes.func,
    onCloseTab: PropTypes.func,
}

TabList.defaultProps = {
    unsaveIds: []
}

export default TabList