import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

function SideDrawer(props) {

    let drawerClasses = 'side_Drawer';
    if (props.show) {
        drawerClasses = 'side_Drawer open';
    }

    return (
        <nav className={drawerClasses} >
            <h2 className="menu_title">MENU</h2>
            <ul>
                <li><Link to="/sobre" >SOBRE</Link></li>
                <div className="categorias_sd_title">CATEGORIAS</div>
                <div className="categorias_sd">
                    <li> <Link to="/cabelos" >CABELOS</Link> </li>
                    <li> <Link to="/beleza" >BELEZA</Link></li>
                    <li> <Link to="/moda"> MODA</Link></li>
                    <li> <Link to="/entretenimento" >ENTRETENIMENTO</Link></li>
                </div>
                <li> <Link to="/ondulindas">ONDULINDAS</Link></li>
                <li> <Link to="/contato">CONTATO</Link></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;