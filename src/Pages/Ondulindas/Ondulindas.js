import React from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import PicOndulindas from '../../Images/logo_ondulindas_bg.png'
import './Ondulindas.css'

export default function Ondulindas() {
    return (
        <div className="ondulindas_allpage" >
            <div className="page_title">
                ONDULINDAS
            </div>
                <img className="logo_ondulindas" src={PicOndulindas} alt="" />

            <div className="page_text" >

                Criei o Projeto Ondulindas para incentivar as
                minhas seguidoras a abraçarem as
                características de seus cabelos naturais. O
                cabelo ondulado tem volume, frizz, mechas
                indefinidas mas sempre destaco que essas
                "imperfeições" fazem com que ele seja único
                e LINDO!
            </div>
            <div className="telegram_div" >
                <hr/>
                <p> 
                    Entre no nosso grupo <span>do Telegram!</span>
                   </p> <hr/>
                <a
                    className="telegram"
                    href="https://t.me/joinchat/O16hhVRqBL42s_Kq2eo-Ow"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TelegramIcon fontSize="large" />
                </a>

            </div>
        </div>
    )
}