import React, { useEffect, useState } from 'react';
import GetId from '../../useState/GetId';
import folderImage from '../../Images/image-folder.png';
import { Link } from 'react-router-dom';
import './HomeItem.css';

import ReactPaginate from 'react-paginate';

const HomeItem = () => {
    const [imageId, setImageId, control, setControl] = GetId();

    // ----------------------react pagination functionality---------------------
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 16;


    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(imageId?.map(e => e).slice(itemOffset, endOffset));
        setPageCount(Math.ceil(imageId?.map(e => e).length / itemsPerPage));
    }, [itemOffset, itemsPerPage, imageId]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % (imageId?.map(e => e)).length;

        setItemOffset(newOffset);
    };


    return (
        <>
            <div className='container my-3'>
                <div className="container my-3">
                    <h1>Welcome to Drive photo</h1>
                </div>

                <div className="my-5">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {control === true ? (
                            currentItems?.map(id => (
                                <div key={id?._id} className="col">
                                    <div className="card h-100 folder-card">
                                        <div className="folder-icon">
                                            <i class="bi bi-folder"></i>
                                        </div>
                                        <div className="card-body folder-card-body">
                                            <h5 className="card-title">{id?.folderName}</h5>
                                            <span className="card-text folder-text">Date: {id?.date}</span><br />
                                            <span>File Path: {id?.driveName}</span><br />
                                            <span className="card-text folder-text">Total Images: <span style={{ fontWeight: 'bold' }}>{id?.idList?.length}</span></span>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn open-btn w-100">
                                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/image-folder/${id?._id}`}>
                                                    Open</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="spiner_section">
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="⇾"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="⇽"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageLinkClassName='menu'
                previousLinkClassName='page-num'
                nextLinkClassName='page-num'
                activeLinkClassName='active'
                pageClassName='page-style'
            />
        </>
    );
};

export default HomeItem;