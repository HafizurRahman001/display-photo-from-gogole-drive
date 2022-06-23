import React from 'react';
import './Home.css';
import heroImg from '../../Images/hero-image.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container my-5'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="hero-head text-start">
                        <div className="hero-main-text">
                            <h1>WELCOME TO DRIVE PHOTO</h1>
                        </div>
                        <div className="hero-sub-main-text">
                            <h4 className='pb-2'>Typewritting here .....</h4>
                        </div>
                        <div className="hero-sub-text text-start">
                            Here I'm trying to keep my all images that i have captured in my life as archive. These all photos are from the Google drive database. I can easily access them and find out their file path as if I can download them and reuse. find out their file path as if I can download them and reuse.
                        </div>
                        <div className="hero-btn my-3">
                            <button className="btn btn-primary explore-btn">
                                <Link className='hero-btn-style' to="/all-images">Explore Images</Link>
                                <span className="hero-btn-arrow-icon px-2">
                                    <i class="bi bi-arrow-right-circle"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hero-image-section">
                        <div className="hero-image-container">
                            {/* <img className='hero-image' src={heroImg} alt="" /> */}

                            <div className="row p-2">
                                <div className="col-md-6 col-6">
                                    <img className='hero-image' src={heroImg} alt="" />
                                </div>
                                <div className="col-md-6 col-6">
                                    <img className='hero-image' src={heroImg} alt="" />
                                </div>
                            </div>
                            <div className='row p-2'>
                                <div className="col-md-6 col-6">
                                    <img className='hero-image' src={heroImg} alt="" />
                                </div>
                                <div className="col-md-6 col-6">
                                    <img className='hero-image' src={heroImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="feature-section my-4">
                    <div className="row feature-container">
                        <div className="col-md-4">
                            <div className="feature-text text-start">
                                <div className="feature-icon text-center">
                                    <i class="bi bi-bar-chart-fill"></i>
                                </div>
                                <div className='feature-body'>
                                    <div className="feature-heading">
                                        <h3 className='pt-2'>Add Title</h3>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem fugit fuga beatae nemo ea officia, deleniti possimus repudiandae, aspernatur repellendus nisi expedita harum sunt fugiat tempore ab odit cupiditate.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="feature-text text-start">
                                <div className="feature-icon text-center">
                                    <i class="bi bi-bar-chart-fill"></i>
                                </div>
                                <div className='feature-body'>
                                    <div className="feature-heading">
                                        <h3 className='pt-2'>Add Title</h3>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem fugit fuga beatae nemo ea officia, deleniti possimus repudiandae, aspernatur repellendus nisi expedita harum sunt fugiat tempore ab odit cupiditate.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="feature-text text-start">
                                <div className="feature-icon text-center">
                                    <i class="bi bi-bar-chart-fill"></i>
                                </div>
                                <div className='feature-body'>
                                    <div className="feature-heading">
                                        <h3 className='pt-2'>Add Title</h3>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem fugit fuga beatae nemo ea officia, deleniti possimus repudiandae, aspernatur repellendus nisi expedita harum sunt fugiat tempore ab odit cupiditate.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;