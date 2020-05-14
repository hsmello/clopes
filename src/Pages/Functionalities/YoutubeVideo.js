import React from 'react';

export default function YoutubeVideo(props) {
    return (
        <div className="iframe-container">
            <iframe
                title="Youtube"
                width="560"
                height="315"
                src={props.src}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}