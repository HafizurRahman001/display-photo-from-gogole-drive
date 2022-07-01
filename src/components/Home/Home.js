import React, { useEffect, useState } from 'react';
import './Home.css';
import heroImg from '../../Images/hero-image.jpg';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import GetId from '../../useState/GetId';

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
                                        strings: [`Total Folder : <span style='color:yellow'>${overallDetails?.totalFolder}</span>`, `Total Images : <span style='color:yellow'>${overallDetails?.totalImages}</span>`, `Total Drive Number : <span style='color:yellow'>${uniqueDriveNumber?.length}</span>`],
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
                                    <i className="bi bi-bar-chart-fill"></i>
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
                                    <i className="bi bi-bar-chart-fill"></i>
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
                                    <i className="bi bi-bar-chart-fill"></i>
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