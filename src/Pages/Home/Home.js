import React from 'react';
import './Home.css'
import Carol from '../../Images/Carol.jpeg'

function Home() {
    return (
        <div className="global_home">
            <div >

                <img className="first_picture" src={Carol} />

            </div>
        </div>
    );
};

export default Home;