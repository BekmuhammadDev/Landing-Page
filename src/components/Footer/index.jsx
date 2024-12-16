import React from 'react';
import Button from '../Button';
import Container from '../Container';
import FacebookIcon from "../../assets/icon/facebook.svg"
import InstagramIcon from "../../assets/icon/instagram.svg"
import LinkedInIcon from "../../assets/icon/linkedin.svg"
import TwitterIcon from "../../assets/icon/twitter.svg"
import YoutubeIcon from "../../assets/icon/youtube.svg"
import "./style.css"

const index = () => {
    return (
        <footer>
            <Container>
                <div className="navbar-container">
                    <nav className="navbar-footer">
                        <div className='navbar-text'>©2023 Yourcompany</div>
                        <div className="navbar-logo">Landing</div>
                        <Button width={109} height={29} text={'Purchase now'} />
                    </nav>
                </div>

                <div className='footer-container'>
                    <div className='footer-nav'>

                        <ul className="nav-links">
                            <li className="nav-item">
                                <a href="/" className="navbar-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>

                        <div className='nav-logo'>
                            <a href="#"><img src={FacebookIcon} alt="facebook" /></a>
                            <a href="#"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                            <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
                            <a href="#"><img src={YoutubeIcon} alt="Youtube" /></a>
                            <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
                        </div>
                    </div>
                </div>
            </Container>


        </footer>
    );
};

export default index;