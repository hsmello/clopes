import React from 'react';
import Logo from '../../Images/logo.png'
import LogoOndulindas from '../../Images/logo_ondulindas.png'
import LogoPhoto from '../../Images/logo_photo.png'
import './Logo.css'

export default function LogoLayout() {
    return (
        <div className="all_logos">
            <div>
                <img className="logo_photo" src={LogoPhoto} alt="" />
            </div>
            <div>
                <img  className="logo" src={Logo} alt="" />
            </div>
            <div >
                <img className="logo_ondulindas" src={LogoOndulindas} alt="" />
            </div>
        </div>
    )
}