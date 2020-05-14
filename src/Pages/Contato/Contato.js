import React from 'react';
import './Contato.css'
import YoutubeVideo from '../Functionalities/YoutubeVideo'
import GetPostData from '../Functionalities/GetPostData'

export default function Contato() {

    console.log(GetPostData.state.dataAPI)
    return (
        <div className="contato_all_page" >
            <div className="title">
                Onde você pode me encontrar?
            </div>
            <div className="subtitle">
                Quer ver mais conteúdo?
            </div>
            <div className="text">
                Para acompanhar todo o tipo de conteúdo que eu divulgo me siga no Instagram, YouTube e Twitter! Por essas redes o engajamento tem sido bacana e você pode acompanhar de perto o meu trabalho. 
            </div>
            <div className="subtitle">
                Gostaria de fazer um depoimento?
            </div>
            <div className="text">
                Cada vez mais tenho recebido feedback dos meus seguidores, o que me dá certeza de estar no caminho certo, me incentiva a continuar nesse trabalho e proporciona novos contatos. Estou disponível em qualquer rede social e também pelo meu e-mail carol@carol.carol
            </div>
            <div className="subtitle">
                Está a procura de uma parceria?
            </div>
            <div className="text">
                Caso você esteja interessado em uma parceria pode mandar mensagem através das minhas redes sociais ou enviar um e-mail para carol@carol.carol.  
            </div>

        </div>
    )
}


