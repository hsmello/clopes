import React from 'react';
import Pic from '../../Images/Carol_Sobre.jpeg'
import './Sobre.css'


function Sobre() {
    return (
        <div>
            <div className="text_title">
                O que você sabe sobre a Carol Lopes?
                </div>
            <div className="sobre" >
                <img src={Pic} className="pic" alt="" />
                <div >

                    <div className="text_body" >

                        Oi! Me chamo Carol, tenho 25 anos, sou carioca mas moro em Curitiba.
                        <br />
                        <br />
                        Uso meu cabelo natural há 3 anos e criei meu Instagram para compartilhar minhas experiências, dicas e cuidados com o cabelo.
                        <br />
                        <br />
                        Ajudo pessoas a não dependerem de chapinha para se sentirem bonitas, mostro que o cabelo ondulado não é um liso rebelde ou um cabelo indefinido! Lá no Instagram falo sobre cabelos, beleza, autoestima e sobre a minha rotina com uma boa dose de bom humor!
                        <br />
                        <br />
                        Aqui no meu site você encontrará estes mesmos assuntos de uma forma mais detalhada, com posts escritos por mim. Seja bem-vindo e espero que goste!
                        <br />
                        <div className="text_signature">
                            Beijos,
                            <br />
                            Carol.
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Sobre;