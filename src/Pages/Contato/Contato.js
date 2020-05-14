import React from 'react';
import './Contato.css'
import YoutubeVideo from '../Functionalities/YoutubeVideo'
import GetPostData from '../Functionalities/GetPostData'

export default function Contato() {
    
    console.log(GetPostData.state.dataAPI)
    return (
        <div className="contato_all_page" >
            
            {/* <button onClick={() => GetPostData()} /> */}
            
            Contato page
            <YoutubeVideo 
                src="https://www.youtube.com/embed/gb_qeAY8Aq4"
            />
        </div>
    )
}


