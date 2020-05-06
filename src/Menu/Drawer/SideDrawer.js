import React from 'react';
import './SideDrawer.css';

function SideDrawer(props) {
    
    let drawerClasses = 'side_Drawer';
    if (props.show) {
        drawerClasses = 'side_Drawer open';
    }

    return (
    <nav className={drawerClasses} >
        <h2 className="menu_title">MENU</h2>
        <ul> 
            <li><a href="/music">SOBRE</a></li>
            <li><a href="/contact">OP2</a></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;