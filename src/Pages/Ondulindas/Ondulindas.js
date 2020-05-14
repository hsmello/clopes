import React from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import PicOndulindas from '../../Images/logo_ondulindas_bg.png'
import './Ondulindas.css'

export default function Ondulindas() {
    return (
        <div className="ondulindas_allpage" >
            <div className="page_title">
                PAGE TITLE HERE
            </div>

            <div className="page_text" >

                Criei o Projeto Ondulindas para incentivar as
                minhas seguidoras a abraçarem as
                características de seus cabelos naturais. O
                cabelo ondulado tem volume, frizz, mechas
                indefinidas mas sempre destaco que essas
                "imperfeições" fazem com que ele seja único
                e LINDO!
                <img className="logo_ondulindas" src={PicOndulindas} alt="" />
            </div>
            <div>
                <a
                    className="telegram"
                    href="https://twitter.com/CarolLopesblog"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TelegramIcon fontSize="large" />
                </a>

            </div>
        </div>
    )
}