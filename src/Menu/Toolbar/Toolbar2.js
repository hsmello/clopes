import React, { useState } from 'react';
import './Toolbar2.css'
import Logo from '../../Images/logo_nb.png'
import Logo_Photo from '../../Images/logo_photo.png'
import DrawerButton from '../DrawerButton/DrawerButton';
import { Link } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";

// https://www.youtube.com/watch?v=ozE-YFiaVPU
function Toolbar(props) {

    const [categoriasShow, serCategoriasShow] = useState(false)

    Toolbar.handleClickOutside = () => serCategoriasShow(false)

    function handleCategoriasClick() {
        serCategoriasShow(true)
    }

    const CategoriasBlock = () => (
        <>
        <Link to="/cabelos" >CABELOS</Link>
        <Link to="/beleza" >BELEZA</Link>
        <Link to="/moda"> MODA</Link>
        <Link to="/entretenimento" >ENTRETENIMENTO</Link> 
        </>
    )

    return (
        <header className="header">
            <div className="first_logo" >
                <Link to="/home"><img className="logo" src={Logo} alt="" /> </Link>
            </div>
            <nav className="nav_area">
                <div className="menu_button">
                    <DrawerButton onClick={props.onClick} />
                    <Link to="/home"><img className="logo" src={Logo} alt="" /> </Link>
                </div>
                <div className="menu_options">

                    <Link to="/sobre" >SOBRE</Link>
                    <div className="categorias">
                        <button
                            // onClick={handleCategoriasClick}
                        >CATEGORIAS</button>
                        <div className="categorias_options">
                            {/* {categoriasShow ?
                                <CategoriasBlock /> :
                                null} */}
                                <CategoriasBlock />
                        </div>
                    </div>
                    <Link to="/ondulindas">ONDULINDAS</Link>
                    <Link to="/contato">CONTATO</Link>
                </div>
            </nav>
            {/* <div className="second_logo" > */}
                {/* <img className="logo" src={Logo_Photo} alt="" /> */}
            {/* </div> */}
        </header>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => Toolbar.handleClickOutside
};

export default onClickOutside(Toolbar, clickOutsideConfig);