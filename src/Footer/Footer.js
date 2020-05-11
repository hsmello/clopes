import React from 'react';
import './Footer.css'

import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div className="footer" >
            <div className="socialMediaTags">
                <a
                    className="instagram social"
                    href="http://www.instagram.com/carollopes.blog"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InstagramIcon fontSize="large" />
                </a>
                <a
                    className="twitter social"
                    href="https://twitter.com/CarolLopesblog"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon fontSize="large"  />
                </a>
                <a
                    className="youtube social"
                    href="https://www.youtube.com/channel/UCSY90ryrZQIgVkeVfNzZmXA"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <YouTubeIcon fontSize="large"  />
                </a>
     

            </div>

            <div className="copyright">
                <h5>Copyright © 2020 All rights reserved.</h5>
            </div>     
        </div>
    );
};

export default Footer;