import React, { useState, useEffect } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Section from '../../components/Section';
import Loader from '../../components/Loader';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

import BgImg from "../../assets/img/bgimg.png"
import GroupImg from "../../assets/img/GroupImg.png"
import PowerfulImg from "../../assets/img/powerful-img.png"
import BackToTop from '../../components/BacktoTop';
import AnimatedSection from "../../components/AnimatedSection"

import "./style.css"
import Card from '../../components/Card';

const index = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    
    // --------------------------------------------//

    const notify = () => {
        toast.success("Bu muvaffaqiyatli xabar!", {
            position: toast.positiont,
            autoClose: 3000,
        });
    }

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <BackToTop />

                    <section>
                        <Container>
                            <div className='wrapper'>
                                <div className="wrapper-right">
                                    <div className='wrapper-text'>
                                        <h1>Introduce Your Product <br /> Quickly & Effectively</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque <br /> penatibus et magnis dis parturient montes, nascetur ridiculus <br /><br />
                                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, <br /> sem. Nulla consequat massa quis enim.</p>
                                    </div>

                                    <div className='wrap-btn'>
                                        <Button text={'Purchase UI Kit'}  onclick={notify}/>
                                        <Button text={'Learn More'} onclick={notify}/>
                                    </div>
                                </div>


                                <div className="wrapper-left">
                                    <div className='wrap-img'>
                                        <img src={BgImg} alt="#" />
                                    </div>
                                    <div className='wrap-group'>
                                        <img src={GroupImg} alt="#" />
                                    </div>

                                </div>
                            </div>
                        </Container>
                    </section>

                    <AnimatedSection>

                        <section>
                            <Container>
                                <div className='powerful'>
                                    <div className="powerful-right">

                                        <div className="powerful-text">
                                            <h1>Light, Fast & Powerful</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis <br /> dis parturient montes, nascetur ridiculus <br /><br />
                                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. <br /> Nulla consequat massa quis enim.</p>
                                        </div>

                                        <div className='wrap-card'>
                                            <Card />
                                            <Card />
                                        </div>

                                    </div>

                                    <div className="powerful-left">
                                        <div>
                                            <img className='powerful-img' src={PowerfulImg} alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </section>

                        <Section />

                        <section className='price-section'>
                            <Container>
                                <div className="wrap-price">

                                    <div className='price-about'>
                                        <h2>A Price To Suit Everyone</h2><br />
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula <br /> eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient <br /> montes, nascetur ridiculus </p>
                                    </div>

                                    <div >
                                        <h2 className='price-num'>$40</h2>
                                        <small>UI Design Kit</small>
                                    </div> <br /><br />

                                    <div className='price-btn'>
                                        <small>See, One price. Simple.</small><br /><br />
                                        <Button text={'Purchase Now'} onclick={notify}/>
                                    </div>
                                </div>
                            </Container>
                        </section>

                    </AnimatedSection>

                    <Footer />
                    <ToastContainer />

                </>

            )}

        </>
    );
};

export default index;
