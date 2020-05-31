import React from 'react';
import UserStore from './UserStore'
import MyTextField from '../../Imports/MyTextField';
import MyButton from '../../Imports/MyButton';
import './LogInLayout.css'
import APIBaseUrl from '../Functionalities/API';

class LogInLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            buttonDisabled: false,
            errorMsg: null
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    resetForm() { //if smmth is not correct it will resert the loginpage
        this.setState({
            ...this.state,
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    async doLogin() {

        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }

        this.setState({
            buttonDisabled: true
        })

        try {

            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ // this will send the input value to the api and check if it exists
                    username: this.state.username,
                    password: this.state.password
                })
            });

            if (!res.ok) {
                const awaitError = await res.json()
                throw awaitError
            }

            let result = await res.json();
            if (result && result.success) {
                // UserStore.isLoggedIn = true;
                UserStore.username = result.username;
                localStorage.setItem('token', result.token)
                this.setState({...this.state, isLoggedIn: true})
            }
            else if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            }
        }

        catch (e) {
            console.log(e.msg);
            this.setState({ ...this.state, errorMsg: e.msg })
            this.resetForm();
        }
    }
    
    render() {
        
        if (this.state.isLoggedIn) {
            window.location.href="/admin"
            return;
        }

        return (
            <div className="all_page" >
                <div className="login_box" >

                    <MyTextField
                        label="Username"
                        variant="outlined"
                        type="string"
                        value={this.state.username}
                        onChange={(val) => this.setInputValue('username', val)}
                    />
                    <MyTextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={this.state.password}
                        onChange={(val) => this.setInputValue('password', val)}
                        OnClickEnter={(event) => {
                            console.log(event)
                            this.doLogin()
                        }}
                    />
                    <MyButton
                        label="Submit"
                        disabled={this.state.buttonDisabled}
                        type="submit"
                        onClick={() => this.doLogin()}
                    />

                    <div>
                        {this.state.errorMsg}
                    </div>

                </div>
            </div>
        );
    }
};

export default LogInLayout;