// index.jsx
import React from 'react';
import Container from '../Container';
import Button from '../Button';
import './style.css'; 

const Index = () => {
    return (
        <header>
            <Container>
                <div className="navbar-container">
                    <nav className="navbar">
                        <ul className="navbar-links">
                            <li className="navbar-item">
                                <a href="/" className="navbar-link">Home</a>
                            </li>
                            <li className="navbar-item">
                                <a href="/about" className="navbar-link">About</a>
                            </li>
                            <li className="navbar-item">
                                <a href="/contact" className="navbar-link">Contact</a>
                            </li>
                        </ul>
                        <div className="navbar-logo">Landing</div>
                        <Button text={'Buy Now'} />

                    </nav>
                </div>
            </Container>
        </header>

    );
};

export default Index;
