import React from 'react';
import './Toolbar.css'
import Logo from '../../Images/logo.png'
import Logo_Photo from '../../Images/logo_photo.png'
import DrawerButton from '../DrawerButton/DrawerButton';
import { Link } from 'react-router-dom';

// https://www.youtube.com/watch?v=ozE-YFiaVPU
function Toolbar(props) {

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
                        <button>CATEGORIAS</button>

                        <div className="tessst" >
                            <div className="categorias_options">

                                <li><Link to="/cabelos">CABELOS</Link></li>
                                <div className="cabelos_suboptions">
                                    <li><Link to="/cabelos-cuidados">Cuidados</Link></li>
                                    <li><Link to="/cabelos-finalizacao">Finalização</Link></li>
                                    <li><Link to="/cabelos-inspiracoes">Inspirações</Link></li>
                                    <li><Link to="/cabelos-produtos-e-resenhas">Produtos e Resenhas</Link></li>

                                </div>
                                <li><Link to="/beleza">BELEZA</Link></li>
                                <li><Link to="/moda">MODA</Link></li>
                                <li><Link to="/entretenimento">ENTRETENIMENTO</Link></li>
                            </div>
                        </div>
                    </div>


                    <Link to="/ondulindas">ONDULINDAS</Link>
                    <Link to="/contato">CONTATO</Link>
                </div>
            </nav>
            <div className="second_logo" >
                <img className="logo" src={Logo_Photo} alt="" />
            </div>
        </header>
    );
};

export default Toolbar;