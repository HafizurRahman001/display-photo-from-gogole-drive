import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import './Images.css'

const Images = () => {
    const [imageId, setImageId] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(12);
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


    //Get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;

    let currentPost = [];
    imageId?.map(e => {
        currentPost.push(e?.idList.slice(indexOfFirstPost, indexOfLastPost));
    })


    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    };

    let totalPost;
    imageId?.map(e => {
        totalPost = e?.idList?.length
    })

    return (
        <div>

            <div class="container">
                <div class="row gy-2">

                    {control === true ? (
                        // imageId?.map(objectId => (
                        //     objectId?.idList?.map(imgId => (
                        //         <div className='col-md-3 col-4' key={imgId}>
                        //             <img className='img-thumbnail img-fluid' src={`https://drive.google.com/uc?id=${imgId}`} alt="" />
                        //             <figcaption style={{ 'fontSize': '10px' }}>{objectId?.driveName}</figcaption>
                        //         </div>
                        //     ))
                        // ))
                        currentPost[0]?.map(id => (
                            <div className='col-md-3 col-4' key={id}>
                                <img className='img-thumbnail img-fluid' src={`https://drive.google.com/uc?id=${id}`} alt="" />
                                <figcaption style={{ 'fontSize': '10px' }}>{imageId?.map(e => e?.driveName)}</figcaption>
                            </div>
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
                <Pagination postsPerPage={postPerPage} totalPosts={totalPost} paginate={paginate}></Pagination>
            </div>

        </div>
    );
};

export default Images;
