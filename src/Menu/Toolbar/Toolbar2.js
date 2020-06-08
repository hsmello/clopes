import React from 'react';
import './Toolbar2.css'
import Logo from '../../Images/logo_nb.png'
import DrawerButton from '../DrawerButton/DrawerButton';
import { Link } from 'react-router-dom';
// import onClickOutside from "react-onclickoutside";

function Toolbar(props) {

    // const [categoriasShow, serCategoriasShow] = useState(false)

    // Toolbar.handleClickOutside = () => serCategoriasShow(false)

    const CabelosBlock = () => (
        <>
            <Link to="/cabelos-cuidados">Cuidados</Link>
            <Link to="/cabelos-finalizacao">Finalização</Link>
            <Link to="/cabelos-inspiracoes">Inspirações</Link>
            <Link to="/cabelos-produtos-e-resenhas">Produtos e Resenhas</Link>
        </>
    )

    const CategoriasBlock = () => (
        <>
            <div className='cabelos_div' >
                <button>CABELOS</button>
                <div className="cabelos_suboptions">
                    <CabelosBlock />
                </div >
            </div>
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
                    <Link to="/ebook" >EBOOK</Link>
                    <div className="categorias">
                        <button
                        >CATEGORIAS</button>
                        <div className="categorias_options">
                            <CategoriasBlock />
                        </div>
                    </div>
                    <Link to="/ondulindas">ONDULINDAS</Link>
                    <Link to="/contato">CONTATO</Link>
                </div>
            </nav>
        </header>
    );
};

// const clickOutsideConfig = {
//     handleClickOutside: () => Toolbar.handleClickOutside
// };

export default Toolbar;

// export default onClickOutside(Toolbar, clickOutsideConfig);