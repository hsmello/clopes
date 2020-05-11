import React from 'react';
import { observer } from 'mobx-react';
import Admin from '../Admin/Admin';
import UserStore from './UserStore';
import LogInLayout from './LogInLayout';
import MyButton from '../../Imports/MyButton';
import MyLoading from '../../Imports/MyLoading';
import './Login.css'

class Login extends React.Component {

    async componentDidMount() {
        try {

            let res = await fetch('http://localhost:3001/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                } // it is gonna check if the user is logged in or not
            });

            let result = await res.json();

            if (result && result.success) {
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            } else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;
            }

        }
        catch (e) { //if an error is returned from the API this catch will be returned
            UserStore.loading = false;
            UserStore.isLoggedIn = false;
        }
    }

    async doLogout() {

        try {

            let res = await fetch('http://localhost:3001/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                } // it is gonna check if the user is logged in or not
            });

            let result = await res.json();

            if (result && result.success) {
                UserStore.isLoggedIn = false;
                UserStore.username = "";
            }

        }

        catch (e) { //if an error is returned from the API this catch will be returned
            console.log(e)

        }
    }

    render() {

        if (UserStore.loading) {
            return (
                <div>
                    <div className="loading">
                        <MyLoading />
                    </div>
                </div>
            )
        }
        else {

            if (UserStore.isLoggedIn) {
                return (
                    <div>
                        <div >
                            Welcome {UserStore.username}
                            
                            <MyButton
                                label="Logout"
                                onClick={() => { this.doLogout() }}
                            />

                            <Admin />
                        </div>
                    </div>
                )
            }

            return (
                <div>
                    <LogInLayout />
                </div>
            )
        }
    }
}

export default observer(Login);
