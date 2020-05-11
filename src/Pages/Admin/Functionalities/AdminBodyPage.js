import React, { useState } from 'react';
import FileUpload from './FileUpload'
import MyTextareaAutosize from '../../../Imports/MyTextareaAutosize';
import './AdminBodyPage.css'

export default function AdminBodyPage() {

    const [postBody, setPostBody] = useState("")
    const [postBodyCount, setPostBodyCount] = useState(0)

    function handleMyTextareaAutosizeChange(e) {
        setPostBody(e.target.value)
        setPostBodyCount(e.target.value.length)
        console.log(e.target.value)
    }

    return (
        <div>
            <div className="title" >

                
            </div>
            <MyTextareaAutosize
                onChange={(e) => handleMyTextareaAutosizeChange(e)}
            />

            Number of characters so far: {postBodyCount}

            <FileUpload />

        </div>
    )
}