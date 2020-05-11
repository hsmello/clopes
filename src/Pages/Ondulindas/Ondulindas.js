import React from 'react';
import './Ondulindas.css'
import TelegramIcon from '@material-ui/icons/Telegram';

export default function Ondulindas() {
    return (
        <div className="ondulindas_allpage" >
            Criei o Projeto Ondulindas para incentivar as
            minhas seguidoras a abraçarem as
            características de seus cabelos naturais. O
            cabelo ondulado tem volume, frizz, mechas
            indefinidas mas sempre destaco que essas
            "imperfeições" fazem com que ele seja único
            e LINDO!
            <div>
            <a
                    className="telegram"
                    href="https://twitter.com/CarolLopesblog"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TelegramIcon fontSize="large"  />
                </a>
            
            </div>
        </div>
    )
}