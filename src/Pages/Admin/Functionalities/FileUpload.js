import React, { Component } from 'react';
import MyButton from '../../../Imports/MyButton';

export default class FileUpload extends Component {

    state = {
        selectedFile: null
    }

    fileSelectHandler = event => {
        this.setSetate({
            selectedFile: event.target.files[0]
        })
    
    }

    async fileUploadHandler() {
         
        if (!this.state.selectedFile) {
            return;
        }

        try {

            let res = await fetch('http://localhost:3001/admin', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // title
                })
            })

        }

        catch(e) {

        }

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