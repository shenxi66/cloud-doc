import React, { useState, useEffect, useRef } from 'react'
import {
    SearchOutlined,
    CloseOutlined
} from '@ant-design/icons'
// import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const FileSearch = ({ title, onFileSearch }) => {
    const [inputActive, setInputActive] = useState(false)
    const [value, setValue] = useState('')
    const node = useRef(null)

    const closeSearch = e => {
        e.preventDefault()
        setInputActive(false)
        setValue('')
    }

    useEffect(() => {
        const handleInputEvent = e => {
            const { keyCode } = e
            if (keyCode === 13 && inputActive) {
                onFileSearch(value)
            } else if (keyCode === 27 && inputActive) {
                closeSearch(e)
            }
        }
        document.addEventListener('keyup', handleInputEvent)
        return () => {
            document.removeEventListener('keyup', handleInputEvent)
        }
    })

    useEffect(() => {
        if (inputActive) {
            node.current.focus()
        }
    }, [inputActive])

    return (
        <div className='alert alert-primary d-flex justify-content-between align-items-center'>
            {
                !inputActive &&
                <>
                    <span>{title}</span>
                    <button
                        type='button'
                        className='icon-btn'
                        onClick={() => setInputActive(true)}
                    >
                        <SearchOutlined />
                    </button>
                </>
            }
            {
                inputActive &&
                <>
                    <input
                        className='form-control'
                        value={value}
                        ref={node}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button
                        type='button'
                        className='icon-btn'
                        onClick={closeSearch}
                    >
                        <CloseOutlined />
                    </button>
                </>
            }
        </div>
    )
}

FileSearch.propTypes = {
    title: PropTypes.string,
    onFileSearch: PropTypes.func.isRequired
}

FileSearch.defaultProps = {
    title: '我的云文档'
}

export default FileSearch