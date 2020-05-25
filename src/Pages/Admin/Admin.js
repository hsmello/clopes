import React from 'react';
import MyTextField from '../../Imports/MyTextField';
import MyDropdown from '../../Imports/MyDropdown';
import './Admin.css'
import MyTextareaAutosize from '../../Imports/MyTextareaAutosize';
import { Editor } from '@tinymce/tinymce-react';
import ReactNotification from 'react-notifications-component';
import SuccessNotification from '../Functionalities/SuccessNotification';
import FailNotification from '../Functionalities/FailNotification';
import MyButton from '../../Imports/MyButton';

const callSuccessNotification = SuccessNotification();
const callFailNotification = FailNotification();

class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postTitle: '',
            postCategory: '',
            postBody: '',
            postBodyCount: 0,
            postDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
            selectedFile: null,
            postLink: '',
            disableButton: false,
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
            postBodyCount: 0,
            postDate: '',
            selectedFile: null,
            postLink: '',
            disableButton: false,
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

    // handleMyTextareaAutosizeChange = (e) => {
    //     this.setState({
    //         postBody: e.target.value,
    //         postBodyCount: e.target.value.length,
    //     })
    // }

    handleEditorChange = (content, editor) => {
        console.log(content)
        this.setState({
            postBody: content,
        })
    }

    fileSelectHandler = event => {
        event.persist()
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    async fileUploadHandler() {

        if (!this.state.postBody ||
            !this.state.postTitle ||
            !this.state.postCategory
        ) {
            callFailNotification();
            return;
        }

        this.setState({
            disableButton: true,
        })

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
                    postCategory: this.state.postCategory,
                    postDate: this.state.postDate,
                    postLink: Math.random().toString(36).substr(2, 9),
                })
            });

            if (!res.ok) {
                const awaitError = await res.json()
                throw awaitError
            }

            this.resetForm();
            callSuccessNotification()
        }

        catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className="admin_page">
                <ReactNotification />
                <div className="title">
                    Kole, Carol! Bora postar? :)
            </div>
                <div className="title" >
                    <MyTextField
                        label="Título"
                        value={this.state.postTitle}
                        onChange={(e) => { this.handleTitleChange(e) }}
                    />
                    <MyDropdown
                        onChange={(e) => this.handleCategoryChange(e)}
                        value={this.state.postCategory}
                    />

                </div>
                <div>
                    <Editor
                        apiKey="c1cacqjn3ogkg6sogfxy55s5x5k3n9339y7uqch6ye623gr9"
                        init={{
                            // width: '85%',
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={this.handleEditorChange}
                    />
                    {/* <MyTextareaAutosize
                        value={this.state.postBody}
                        onChange={(e) => this.handleMyTextareaAutosizeChange(e)}
                    />
                    <br />
                    Number of characters so far: {this.state.postBodyCount} */}
                    <br />
                    <br />
                    <input
                        type="file"
                        label=""
                        onChange={this.fileSelectHandler}
                    />

                    <MyButton
                        label="Salvar o post"
                        disabled={this.state.disableButton}
                        onClick={this.fileUploadHandler}
                    />
                </div>
            </div>
        )
    }
};

export default Admin;