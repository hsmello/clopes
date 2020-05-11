import React, { useState } from 'react';
import AdminBodyPage from './Functionalities/AdminBodyPage';
import MyTextField from '../../Imports/MyTextField';
import MyDropdown from '../../Imports/MyDropdown';
import './Admin.css'

function Admin() {

    const [postTitle, setPostTitle] = useState("")

    function handleTitleChange(e) {
        setPostTitle(e)
    }

    return (
        <div className="admin_page">
            <div className="title">
                Kole, Carol! Bora postar? :)
            </div>
            <div className="title" >
                <MyTextField
                    label="Título"
                    onChange={(e) => { handleTitleChange(e) }}
                />
                <MyDropdown />

            </div>
            <div>

                <AdminBodyPage />
            </div>

        </div>
    )
};

export default Admin;