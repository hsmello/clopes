import React, { Component } from 'react';
import MyButton from '../../../Imports/MyButton';
import APIBaseUrl from '../Functionalities/API';

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

            let res = await fetch('/admin', {
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