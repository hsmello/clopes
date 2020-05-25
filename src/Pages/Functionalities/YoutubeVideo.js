import React from 'react';

export default function YoutubeVideo(props) {
    return (
        <div style={{
            position:"relative",
            height:"350px",
        }}>
            <iframe
                style={{
                    position:"absolute",
                    top:"0",
                    left:"0",
                    width:"100%",
                    height:"100%",
                    maxWidth:"560px",
                    maxHeight:"315px",
                }}
                title="Youtube"
                src={props.src}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    )
}

