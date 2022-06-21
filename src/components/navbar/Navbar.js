import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logoImg from '../../Images/photos.png'
import GetId from '../../useState/GetId';

const Navbar = () => {

    const [imageId, setImageId, control, setControl, darkMode, setDarkMode] = GetId();


    const toggleDarkMode = () => {
        setDarkMode({
            mainBody: {
                backgroundColor: '#1B202C',
                color: '#F7F7F7'
            },
            cardBody: {
                backgroundColor: '#',
                color: '#F7F7F7'
            },
            headingColor: {
                color: 'white'
            }
        })
    };

    // calculate the total image amount
    let totalImageArray = [];
    useEffect(() => {
        imageId?.map(item => {
            totalImageArray.push(item?.idList?.length);
        });
    }, [imageId])

    const totalAmountOfImage = totalImageArray.reduce((initialValue, finalValue) => initialValue + finalValue, 0);
    // console.log(totalAmountOfImage);


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-bg">
                <div className="container-fluid">
                    <div className="navbar-brand" href="#!">
                        <Link className='link-style' to='/home'>
                            <img src={logoImg} alt="" />
                        </Link>
                    </div>
                    <button className="navbar-toggler navbar_toggler_style" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <a href="#!" className='nav-link'>
                                <li className="nav-item">
                                    <Link className='link-style' to="/all-images">Images</Link>
                                </li>
                            </a>
                            <a href="#!" className='nav-link'>
                                <li className="nav-item">
                                    <Link className='link-style' to="/data-entry">Data-Entry</Link>
                                </li>
                            </a>
                            <a href="#!" className='nav-link'>
                                <li className="nav-item">
                                    <span disabled type="" class="btn btn-primary position-relative total_image_section">
                                        Total Image
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {totalAmountOfImage}
                                            <span class="visually-hidden">unread messages</span>
                                        </span>
                                    </span>
                                </li>
                            </a>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul style={{ backgroundColor: '#262b3a' }} className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">Action</a></li>
                                    <li><a className="dropdown-item" href="#!">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#!">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                        <div className="toggle-dark-mode">
                            <i onClick={toggleDarkMode} class="bi bi-brightness-high-fill"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;