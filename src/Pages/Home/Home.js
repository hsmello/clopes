import React from 'react';
import './Home.css';
import Carol from '../../Images/Carol_home.jpeg';
import WebIcon from '@material-ui/icons/Web';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Home() {
    return (
        <div className="global_home">
            <div className="header_home">
                <div className="presentation_home" >
                    <div className="presentation_home_title" >
                        Hello! Eu sou a Carol Lopes :)
                    </div>
                    <div className="presentation_home_body" >
                        Comecei o projeto Ondulindas em 20XX e o feedback tem sido muito gratificante! É muito gratificante e encorajador ver o tanto de mulheres valorizando cada vez mais o natural. Valorize também quem você é!
                    </div>
                </div>

            </div>
            <img className="first_picture" src={Carol} alt="" />

            <div className="box_home">
                <div className="box_home_title" >
                    Onde você pode me encontrar?
                </div>
                <div className="box_home_body" >
                    <div className="box_home_first">
                        <div className="box_home_first_title">
                            <div className="title_icon">
                                <InstagramIcon />
                            </div>
                            Instagram
                        </div>
                        <p className="box_p">
                            No instagram você pode acompanhar bem de perto o meu dia-a-dia e dicas sobre o como valorizar quem você realmente é
                        </p>
                        <a className="first button"  href="/">
                            ACOMPANHE O MEU INSTA
                        </a>
                    </div>
                    <div className="box_home_second">
                        <div className="box_home_second_title">
                            <div className="title_icon">
                                <YouTubeIcon />
                            </div>
                            YouTube
                        </div>
                        <p className="box_p">
                            No YouTube dá pra entrar em mais detalhes e ir a fundo em diversos tópicos! Lá o engajamento tem ficado bem divertido. Acompanhe a gente por lá também!
                        </p>
                        <a className="second button"  href="/">
                            SIGA O MEU CANAL
                        </a>
                    </div>
                    <div className="box_home_third">
                        <div className="box_home_third_title">
                            <div className="title_icon">
                                <WebIcon />
                            </div>
                            Aqui!
                        </div>
                        <p className="box_p">
                            Selecione a categoria que quer ver sobre e fique por dentro do conteúdo! <br /> Para mais detalhes de contato, parceria ou depoimentos, clique no botão abaixo.
                        </p>
                        <a className="third button" href="/">
                            CONTATOS
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;