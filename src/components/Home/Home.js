import React from 'react';
import './Home.css';
import heroImg from '../../Images/hero-image.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container my-5'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="hero-head">
                        <div className="hero-main-text">
                            <h1>WELCOME TO DRIVE PHOTO</h1>
                        </div>
                        <div className="hero-sub-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum earum rem dignissimos consequatur, aspernatur suscipit nam sit sed animi?
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
                            <img className='hero-image' src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;