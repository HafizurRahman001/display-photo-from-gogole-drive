import React, { useEffect, useState } from 'react';
import GetId from '../../useState/GetId';
import { Link } from 'react-router-dom';
import './HomeItem.css';
import ReactPaginate from 'react-paginate';
import { HashLoader, } from 'react-spinners';
import { useForm } from "react-hook-form";

const HomeItem = () => {
    const [imageId, setImageId, control, setControl, darkMode, setDarkMode] = GetId();
    const [passCode, setPassCode] = useState('hafiz');
    const { register, handleSubmit, reset } = useForm();

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

    // handle password function
    const onSubmit = data => {
        console.log(data);
        setPassCode(data.password);
        reset();
    }




    return (
        <>
            {/* password input field */}
            {
                passCode === 'hafiz' ? (
                    <div className="my-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input style={{ color: '#767671' }} type='password' {...register("password")} placeholder='enter your password' />{' '}
                            <input className='pass-submit-btn' type="submit" />
                        </form>
                    </div>
                ) : ''
            }

            <div style={darkMode?.mainBody} className='container my-3'>
                {
                    passCode === '15152525' ? (
                        <div className="container my-3">
                            <h1>All Drive Folders</h1>
                        </div>
                    ) : ''
                }
                <div className="my-5">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {(control === true && (passCode === '15152525')) ? (
                            currentItems?.map(id => (
                                <div key={id?._id} className="col">
                                    <div className="card h-100 folder-card">
                                        <div className="folder-icon">
                                            <i className="bi bi-folder bi-folder-icon"></i>
                                        </div>

                                        <div className="card-body folder-card-body">
                                            <h5 className="card-title card-heading">{id?.folderName}</h5>
                                            <span className=" card-common-style card-text folder-text">Date: {id?.date}</span><br />
                                            <span className=' card-common-style '>File Path: {id?.driveName}</span><br />
                                            <span className=" card-common-style card-text folder-text">Total Images: <span className=" card-common-style" style={{ fontWeight: 'bold' }}>{id?.idList?.length}</span></span>
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
                            <div style={{ width: '50%', margin: 'auto' }}>
                                <marquee style={{ color: 'orangered', fontSize: '26px' }}>Please provide the correct password to Access the folders</marquee>
                                {/* react loader */}
                                <div className="spiner_section">
                                    <HashLoader color='white' />
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </div>
            {
                passCode === '15152525' ? (
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
                ) : ''
            }
        </>
    );
};

export default HomeItem;