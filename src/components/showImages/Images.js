import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import './Images.css'

const Images = () => {
    const [imageId, setImageId] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage] = useState(10);
    const [control, setControl] = useState(true);

    useEffect(() => {
        setControl(false)
        fetch('http://localhost:5000/link-id')
            .then(res => res.json())
            .then(data => {
                setImageId(data)
            }).finally(() => {
                setControl(true)
            })
    }, []);

    imageId.map(elem => {
        console.log('element', elem?.idList);
    })

    // //Get current post
    // const indexOfLastPost = currentPage * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;
    // const currentPost = imageId.slice(indexOfFirstPost, indexOfLastPost);

    // const paginate = pageNumber => {
    //     setCurrentPage(pageNumber);
    // }
    return (
        <div>

            <div class="container">
                <div class="row gy-2">

                    {control === true ? (
                        imageId?.map(objectId => (
                            objectId?.idList?.map(imgId => (
                                <div className='col-md-3 col-4' key={imgId}>
                                    <img className='img-thumbnail img-fluid' src={`https://drive.google.com/uc?id=${imgId}`} alt="" />
                                    <figcaption style={{ 'fontSize': '10px' }}>{objectId?.driveName}</figcaption>
                                </div>
                            ))
                        ))
                    ) : (

                        <div className="spinner__control">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                    }

                </div>
                {/* <Pagination psotPerPage={postPerPage} totalPost={imageId?.length} paginate={paginate}></Pagination> */}
            </div>

        </div>
    );
};

export default Images;
