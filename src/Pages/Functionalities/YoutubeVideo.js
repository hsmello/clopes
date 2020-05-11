import React from 'react';

export default function YoutubeVideo(props) {
    return (
        <div className="iframe-container">
            <iframe
                width="560"
                height="315"
                src={props.src}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </div>
    )
}