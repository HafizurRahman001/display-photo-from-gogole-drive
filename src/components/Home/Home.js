import React, { useEffect, useState } from 'react';
import './Home.css';
import heroImg1 from '../../Images/heroImages/heroimg1.jpg';
import heroImg2 from '../../Images/heroImages/heroimg2.jpg'
import heroImg3 from '../../Images/heroImages/heroimg3.jpg'
import heroImg4 from '../../Images/heroImages/heroimg4.jpg'
import heroImg5 from '../../Images/heroImages/heroimg5.jpg'
import heroImg6 from '../../Images/heroImages/heroimg6.jpg'
import heroImg7 from '../../Images/heroImages/heroimg7.jpg'
import heroImg8 from '../../Images/heroImages/heroimg8.jpg'
import heroImg9 from '../../Images/heroImages/heroimg9.jpg'
import heroImg10 from '../../Images/heroImages/heroimg10.jpg'
import heroImg11 from '../../Images/heroImages/heroimg11.jpg'
import heroImg12 from '../../Images/heroImages/heroimg12.jpg'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import GetId from '../../useState/GetId';

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Home = () => {
    const [imageId, setImageId, control, setControl, darkMode, setDarkMode] = GetId();
    const [overallDetails, setOverallDetails] = useState({});


    const lengthOfEveryArray = [];
    const driveNumberOfEveryArray = [];

    imageId?.map(singleId => {
        lengthOfEveryArray.push(singleId?.idList?.length);
        driveNumberOfEveryArray.push(Number(singleId?.driveName));
    });

    const totalImagesOfAllFolder = lengthOfEveryArray?.reduce((init, final) => (init + final), 0);

    useEffect(() => {
        setOverallDetails({ 'totalFolder': imageId?.length, 'totalImages': totalImagesOfAllFolder, 'totalDrive': driveNumberOfEveryArray?.length });

    }, [imageId?.length]);

    const uniqueDriveNumber = [...new Set(driveNumberOfEveryArray)]

    // console.log('test', driveNumberOfEveryArray);


    return (
        <div className='container my-5'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="hero-head text-start">
                        <div className="hero-main-text">
                            <h1>WELCOME TO DRIVE PHOTO</h1>
                        </div>
                        <div className="hero-sub-main-text">

                            <h4>
                                <Typewriter
                                    options={{
                                        strings: [`Total Folders : <span style='color:yellow'>${overallDetails?.totalFolder}</span>`, `Total Images : <span style='color:yellow'>${overallDetails?.totalImages}</span>`, `Total Drive Number : <span style='color:yellow'>${uniqueDriveNumber?.length}</span>`],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h4>
                        </div>
                        <div className="hero-sub-text text-start">
                            Here I'm trying to keep my all images that i have captured in my life as archive. These all photos are from the Google drive database. I can easily access them and find out their file path as if I can download them and reuse. find out their file path as if I can download them and reuse.
                        </div>
                        <div className="hero-btn my-3">
                            <button className="btn btn-primary explore-btn">
                                <Link className='hero-btn-style' to="/all-images">Explore Images</Link>
                                <span className="hero-btn-arrow-icon px-2">
                                    <i className="bi bi-arrow-right-circle"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="hero-image-section">
                        <div className="hero-image-container">
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <Zoom duration={1500} indicators={index => <div className="indicator">{index + 1}</div>} scale={1.4}>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg1})`
                                            }}>
                                            </div>
                                        </div>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg2})`
                                            }}>
                                            </div>
                                        </div>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg3})`
                                            }}>
                                            </div>
                                        </div>
                                    </Zoom>
                                </div>
                                <div className="col-md-6 col-6">
                                    <Zoom duration={1700} indicators={index => <div className="indicator">{index + 1}</div>} scale={1.4}>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg4})`
                                            }}>
                                            </div>
                                        </div>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg5})`
                                            }}>
                                            </div>
                                        </div>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg6})`
                                            }}>
                                            </div>
                                        </div>
                                    </Zoom>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <Zoom duration={1900} indicators={index => <div className="indicator">{index + 1}</div>} scale={1.4}>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg7})`
                                            }}>
                                            </div>
                                        </div>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg8})`
                                            }}>
                                            </div>
                                        </div>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg9})`
                                            }}>
                                            </div>
                                        </div>
                                    </Zoom>
                                </div>
                                <div className="col-md-6 col-6">
                                    <Zoom duration={2100} indicators={index => <div className="indicator">{index + 1}</div>} scale={1.4}>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg10})`
                                            }}>
                                            </div>
                                        </div>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg11})`
                                            }}>
                                            </div>
                                        </div>
                                        <div className="each-slide-effect">
                                            <div style={{
                                                backgroundImage: `url(${heroImg12})`
                                            }}>
                                            </div>
                                        </div>
                                    </Zoom>
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
                                    <i className="bi bi-bar-chart-fill"></i>
                                </div>
                                <div className='feature-body'>
                                    <div className="feature-heading">
                                        <h3 className='pt-2'>Add Title</h3>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad voluptatem fugit fuga beatae nemo ea officia, deleniti possimus repudiandae, aspernatur repellendus nisi expedita harum sunt fugiat tempore ab odit cupiditate.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="feature-text text-start">
                                <div className="feature-icon text-center">
                                    <i className="bi bi-bar-chart-fill"></i>
                                </div>
                                <div className='feature-body'>
                                    <div className="feature-heading">
                                        <h3 className='pt-2'>Add Title</h3>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad voluptatem fugit fuga beatae nemo ea officia, deleniti possimus repudiandae, aspernatur repellendus nisi expedita harum sunt fugiat tempore ab odit cupiditate.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="feature-text text-start">
                                <div className="feature-icon text-center">
                                    <i className="bi bi-bar-chart-fill"></i>
                                </div>
                                <div className='feature-body'>
                                    <div className="feature-heading">
                                        <h3 className='pt-2'>Add Title</h3>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad voluptatem fugit fuga beatae nemo ea officia, deleniti possimus repudiandae, aspernatur repellendus nisi expedita harum sunt fugiat tempore ab odit cupiditate.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;