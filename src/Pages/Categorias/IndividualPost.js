import React, { useEffect, useState } from 'react';
import GetIndividualPostData from '../Functionalities/GetIndividualPostData';
import anchorme from "anchorme";
import YoutubeVideo from '../Functionalities/YoutubeVideo';
import './IndividualPost.css';

export default function IndividualPost({ match }) {

    const [postData, setPostData] = useState([]);
    // const [postBody, setPostBody] = useState('');

    useEffect(() => {
        async function fetchData() {
            const post = await GetIndividualPostData(match.params.id)
            setPostData(post)
            // setPostBody(post.body)
        }
        fetchData();
    }, [])

    // function validateYouTubeUrl() {
    //     var url = $('#youTubeUrl').val();
    //     if (url != undefined || url != '') {
    //         var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    //         var match = url.match(regExp);
    //         if (match && match[2].length == 11) {
    //             // Do anything for being valid
    //             // if need to change the url to embed url then use below line
    //             $('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
    //         }
    //         else {
    //             // Do anything for not being valid
    //         }
    //     }
    // }

    return (    
        <div>
            {postData.map((post, index) => {

                var linksDetails = anchorme.list(post.body)
                console.log(linksDetails)

                // if (post.body.includes("www.youtube.com")) {
                //     var initialPosition = post.body.indexOf(`<a href="https://www.youtube.com/`) - 3
                //     var endPosition = post.body.indexOf('</a>') + 7
                //     var videoID = 'oi'
                //     console.log(initialPosition, endPosition)
                //     var teste = post.body
                //     console.log(teste)
                //     teste = teste.substring(0, initialPosition) 
                //         + 
                //         `<YoutubeVideo
                //             src="https://www.youtube.com/embed/VsHS4dvppwI"
                //         />` 
                //         + 
                //     teste.substring(endPosition + 1) 
                //     console.log(teste)
                // }

                return (
                    <div key={index}>
                        <div className="page_title">
                            {post.title}
                        </div>
                        <img src={post.image.data} />
                        <div>
                            <div className="page_body" dangerouslySetInnerHTML={{ __html: post.body }} />
                        </div>
                        {/* <YoutubeVideo
                            src="https://www.youtube.com/embed/VsHS4dvppwI"
                        /> */}
                    </div>
                )
            })}
        </div>

    )
}