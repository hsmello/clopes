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
                <li><Link to="/ebook" >SOBRE</Link></li>
                <div className="categorias_sd_title">CATEGORIAS</div>
                <div className="categorias_sd">
                    <div className="cabloes_sd_title"> CABELOS </div>
                    <div className="cabelos_sd">
                        <li><Link to="/cabelos-cuidados">Cuidados</Link></li>
                        <li><Link to="/cabelos-finalizacao">Finalização</Link></li>
                        <li><Link to="/cabelos-inspiracoes">Inspirações</Link></li>
                        <li><Link to="/cabelos-produtos-e-resenhas">Produtos e Resenhas</Link></li>
                    </div>
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