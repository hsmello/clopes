import React, { useEffect, useState } from 'react';
import './Categorias.css';
import GetCategoryPostData from '../Functionalities/GetCategoryPostData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import titleArray from './titles.json';



export default function CategoryPage({ match }) {

    const [data, setData] = useState([]);
    const [titleIndex, setTitleIndex] = useState('')

    useEffect(() => {
        for (var i = 0; i < titleArray.length; i++) {
            if (titleArray[i].url === match.path.substr(1)) {
                setTitleIndex(i)
            }
        }
        async function fetchData() {
            const posts = await GetCategoryPostData(match.path.substr(1));
            setData(posts);
        }
        fetchData();
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, [1]);

    return (
        <div>
            <div className="page_title" >
                {titleIndex ? titleArray[titleIndex].title : ""}
            </div>
            {data.reverse().map((post, index) => {

                let TYPED_ARRAY = new Uint8Array(post.image.data);

                const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
                let base64String = btoa(STRING_CHAR);

                let imageUrl = `data:image/jpeg;base64,${base64String}`

                // console.log(post)
                let buffer = post.image.data
                let b64 = new Buffer.from(buffer).toString('base64')
                let mimeType = 'image/jpeg'
                // console.log(`data:${mimeType};base64,${b64}`)

                return (
                    <div className="post_card" data-aos="fade-up" key={index}>
                        <div className="first_line" >
                            <div className="post_title">
                                {post.title}
                            </div>
                            <div className="post_date">
                                {post.date.substring(0, 10)}
                            </div>
                        </div>
                        <div className="post_body" dangerouslySetInnerHTML={{ __html: post.body.substring(0, 50) + '...' }} />
                        {/* dangerouslySetInnerHTML={{ __html: post.body }}  */}
                        {/* {post.body.substring(0, 50) + '...'} */}
                        <Link to={`${match.path}/${post.link}`} >
                            <p>
                                {'ver mais'}
                            </p>
                            {/* </div> */}
                            <img width="100px" height="100px" className="post_image" src={imageUrl} alt="" />
                        </Link>
                    </div>
                )
            })}
        </div>

    )
} 