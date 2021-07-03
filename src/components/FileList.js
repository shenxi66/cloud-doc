import React, { useState, useEffect, useRef } from 'react'
import {
    FileMarkdownOutlined,
    EditOutlined,
    DeleteOutlined,
    CloseOutlined
} from '@ant-design/icons'
import PropTypes from 'prop-types'

const FileList = ({ files, onFileClick, onSaveEdit, OnFileDelete }) => {
    const [editStatus, setEditStatus] = useState(false)
    const [value, setValue] = useState('')
    const node = useRef(null)

    const closeSearch = e => {
        e.preventDefault()
        setEditStatus(false)
        setValue('')
    }

    useEffect(() => {
        const handleInputEvent = e => {
            const { keyCode } = e
            if (keyCode === 13 && editStatus) {
                const editItem = files.find(file => file.id === editStatus)
                onSaveEdit(editItem.id, value)
                setEditStatus(false)
                setValue('')
            } else if (keyCode === 27 && editStatus) {
                closeSearch(e)
            }
        }
        document.addEventListener('keyup', handleInputEvent)
        return () => {
            document.removeEventListener('keyup', handleInputEvent)
        }
    })

    useEffect(() => {
        if (editStatus) {
            node.current.focus()
        }
    }, [editStatus])

    return (
        <ul className='list-group list-group-flush file-list '>
            {
                files.map(file => (
                    <li
                        className='list-group-item bg-light d-flex align-items-center file-item row'
                        key={file.id}
                    >
                        { (file.id !== editStatus) &&
                            <>
                                <span className='col-2'>
                                    <FileMarkdownOutlined />
                                </span>
                                <span 
                                    className='col-8 c-link'
                                    onClick={() => onFileClick(file.id)}
                                >
                                    {file.title}
                                </span>
                                <button
                                    type='button'
                                    className='icon-btn col-1'
                                    onClick={() => { setEditStatus(file.id); setValue(file.title); }}
                                >
                                    <EditOutlined />
                                </button>
                                <button
                                    type='button'
                                    className='icon-btn col-1'
                                    onClick={() => OnFileDelete(file.id)}
                                >
                                    <DeleteOutlined />
                                </button>
                            </>
                        }
                        {
                            (file.id === editStatus) &&
                            <>
                                <div className='col-10'>
                                    <input
                                        className='form-control'
                                        value={value}
                                        ref={node}
                                        onChange={e => setValue(e.target.value)}
                                    />
                                </div>
                                <button
                                    type='button'
                                    className='icon-btn col-2'
                                    onClick={closeSearch}
                                >
                                    <CloseOutlined />
                                </button>
                            </>
                        }
                    </li>
                ))
            }
        </ul>
    )
}

FileList.propTypes = {
    files: PropTypes.array,
    onFileClick: PropTypes.func,
    OnFileDelete: PropTypes.func,
    onSaveEdit: PropTypes.func,
}

export default FileList