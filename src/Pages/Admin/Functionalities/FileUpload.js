import React, { Component } from 'react';
import MyButton from '../../../Imports/MyButton'

export default class FileUpload extends Component {

    state = {
        selectedFile: null
    }

    fileSelectHandler = event => {
        this.setSetate({
            selectedFile: event.target.files[0]
        })
    
    }

    fileUploadHandler = () => {
         
    }

    render() {
    return (
        <div>
            <input 
                type="file" 
                onChange={this.fileSelectHandler}
            />

            <MyButton 
                label="Upload"
                onClick={this.fileUploadHandler}
            />


        </div>
    );}
} ;