import React from 'react';
import './Toolbar.css'

import DrawerButton from '../DrawerButton/DrawerButton';

function Toolbar(props) {


    return (
        <header className="header">
            <nav>
                <div className="menu_button">
                    <DrawerButton onClick={props.onClick} />
                </div>
                <div className="menu_options">
                    <ul>
                        <li><a href="/">OP1</a></li>
                        <li><a href="/sobre">SOBRE</a></li>
                        <li><a href="/">OP2</a></li>
                        <li><a href="/">OP3</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;