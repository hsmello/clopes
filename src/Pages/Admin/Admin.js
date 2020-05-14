import React from 'react';
import MyTextField from '../../Imports/MyTextField';
import MyDropdown from '../../Imports/MyDropdown';
import './Admin.css'
import MyTextareaAutosize from '../../Imports/MyTextareaAutosize';
// import PostStore from './Functionalities/PostStore';
import MyButton from '../../Imports/MyButton';

class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postTitle: '',
            postCategory: '',
            postBody: '',
            postBodyCount: 0,
            selectedFile: null,
        }
        // for it to be possible calling this inside fileUploadHandler method
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
        this.fileSelectHandler = this.fileSelectHandler.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    resetForm() {
        this.setState({
            postTitle: '',
            postCategory: '',
            postBody: '',
            postBodyCount: '',
            selectedFile: null,
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            postTitle: e
        })
    }

    handleCategoryChange = (e) => {
        this.setState({
            postCategory: e.target.value
        })
    }

    handleMyTextareaAutosizeChange = (e) => {
        this.setState({
            postBody: e.target.value,
            postBodyCount: e.target.value.length,
        })
    }

    fileSelectHandler = event => {
        event.persist()
        // console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    async fileUploadHandler() {

        if (!this.state.postBody || //check conditions and put all of them here
            !this.state.postTitle) {
            console.log('saiu')
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
                    postTitle: this.state.postTitle,
                    postBody: this.state.postBody,
                    selectedFile: this.state.selectedFile,
                    postCategory: this.state.postCategory
                })
            });
            
            if (!res.ok) {
                const awaitError = await res.json()
                throw awaitError
            }
            
            // console.log(res)
            // console.log(res.json())
            // let result = await res.json();
            // if (result && result.success) {
            //     PostStore.title = result.postTitle;
            //     PostStore.categoria = result.postCategory;
            //     PostStore.body = result.postBody;
            //     PostStore.image = result.selectedFile;
                // setState is already done individually as they change
                this.resetForm();
                // alert(result.msg)
            // }
        }

        catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="admin_page">
                <div className="title">
                    Kole, Carol! Bora postar? :)
            </div>
                <div className="title" >
                    <MyTextField
                        label="Título"
                        onChange={(e) => { this.handleTitleChange(e) }}
                    />
                    <MyDropdown
                        onChange={(e) => this.handleCategoryChange(e)}
                        value={this.state.postCategory}
                    />

                </div>
                <div>
                    <MyTextareaAutosize
                        onChange={(e) => this.handleMyTextareaAutosizeChange(e)}
                    />

                    Number of characters so far: {this.state.postBodyCount}
                    <br />
                    <input
                        type="file"
                        label=""
                        onChange={this.fileSelectHandler}
                    />

                    <MyButton
                        label="Upload"
                        onClick={this.fileUploadHandler}
                    />
                    {/* <FileUpload /> */}

                </div>

            </div>
        )
    }
};

export default Admin;