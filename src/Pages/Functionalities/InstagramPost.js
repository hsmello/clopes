import React, { useState } from 'react';
import ig from 'instagram-scraping';


export default function InstagramPost() {

    const [posts, setPosts] = useState({})

    ig.scrapeUserPage('carollopes.blog').then(result => {
        console.dir(result);
        // setPosts(result)     
    });

    return posts;
}   
