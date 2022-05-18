import React from 'react';
import GetId from '../../useState/GetId';
import folderImage from '../../Images/image-folder.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [imageId, setImageId, control, setControl] = GetId();


    return (
        <div className='container my-3'>
            <div className="container my-3">
                <h1>Welcome to Drive photo</h1>
            </div>

            <div className="my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {control === true ? (
                        imageId?.map(id => (
                            <div key={id?._id} className="col">
                                <div style={{ boxShadow: '2px 1px 3px #00000057' }} className="card h-100">
                                    <img src={folderImage} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{id?.folderName}</h5>
                                        <span className="card-text">Date: {id?.date}</span><br />
                                        <span className="card-text">Total Images: {id?.idList?.length}</span>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger w-100">
                                            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/image-folder/${id?._id}`}>Open</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="spiner_section">
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>



        </div>
    );
};

export default Home;




