import React from 'react';
import './Home.css';
import Carol from '../../Images/Carol_home.jpeg';
import WebIcon from '@material-ui/icons/Web';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import YoutubeVideo from '../Functionalities/YoutubeVideo';

// import InstagramPost from '../Functionalities/InstagramPost';

function Home() {

    return (
        <div className="global_home">
            <div className="header_home">
                <div className="presentation_home" >
                    <div className="presentation_home_title" >
                        Hello! Eu sou a Carol Lopes :)
                    </div>
                    <div className="presentation_home_body" >
                        Comecei o projeto #Ondulindas em 2019 e o feedback tem sido muito incrível! É muito gratificante ver cada vez mais pessoas valorizando o cabelo natural!
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
                        <a className="first button" href="/">
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
                        <a className="second button" href="https://www.youtube.com/channel/UCSY90ryrZQIgVkeVfNzZmXA" target="_blank">
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
                        <a className="third button" href="/contato">
                            CONTATO
                        </a>
                    </div>
                </div>
            </div>

            <div className="youtube_home">

                <YoutubeVideo
                    src="https://www.youtube.com/embed/JgXUqxyG-F8"
                />

            </div>

        </div>
    );
};

export default Home;