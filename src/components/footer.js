import React from 'react';
import { SocialIcon } from 'react-social-icons';
import logo from './../assets/logo.png';

const Footer = () => {
    return(
        <div className="container footer">
            <div className='row'>
                <div className='col-sm-auto footerContents'>
                    <a href='#/'><img src ={logo} alt='WasteLess Logo' height={125} width={125} className='footerLogo' /></a>
                </div>
                <div className='col-sm-auto footerLinks footerContents'>
                    <h5> WasteLess </h5>
                    <ul className='list-unstyled'>
                        <li><a className='footerLinksContent' href='#/'>Home</a></li>
                        <li><a className='footerLinksContent' href='#/aboutus'>About Us</a></li>
                        <li><a className='footerLinksContent' href='#/team'>Our Team</a></li>
                        <li><a className='footerLinksContent' href='#/solution'>Our Solution</a></li>
                        <li><a className='footerLinksContent' href='#/contact'>Contact Us</a></li>
                    </ul>
                </div>

                <div className='col-sm-auto  footerContents'>
                    <h5> Stay Connected </h5>
                    <SocialIcon className='socialMediaIcons' url="http://instagram.com/wasteless_sg" />
                    <SocialIcon className='socialMediaIcons' url="https://www.linkedin.com/company/wasteless-singapore/" />
                    <SocialIcon className='socialMediaIcons' url="mailto:sgwasteless@gmail.com" />

                </div>
            </div>
            <div className='row copyrightLine'>
                Copyright © 2020 WasteLess. All rights reserved. Designed by WasteLess Web Dev Team.
            </div>
        </div>

    );

}

export default Footer;