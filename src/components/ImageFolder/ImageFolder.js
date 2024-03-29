import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router';
import GetId from '../../useState/GetId';
import './imageFolder.css';
import LazyLoad from 'react-lazyload';


import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ScrollToTop from 'react-scroll-to-top';
import { HashLoader } from 'react-spinners';

const ImageFolder = () => {
    const [imageId, setImageId, control, setControl, darkMode, setDarkMode] = GetId();
    const [imgIdToModal, setImgIdToModal] = useState('');
    const { id } = useParams();
    const filterImg = imageId?.filter(filterItem => filterItem?._id === id)


    let idArr = [];
    filterImg?.map(e => {
        return idArr.push(e?.idList)
    });




    // -------------------------------------------------------------------
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);


    const itemsPerPage = 30;
    let arr = [];

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;

        filterImg?.map(id => {
            return arr.push((id?.idList))
        });

        let slicedItem = [];
        slicedItem.push(filterImg?.map(e => (e?.idList))[0]?.slice(itemOffset, endOffset));

        let integerPageNumber;
        integerPageNumber = (filterImg?.map(e => (e?.idList))[0]?.length / itemsPerPage)
        if (slicedItem !== undefined) {
            setCurrentItems(slicedItem);
        }
        console.log('test', slicedItem);

        setPageCount(Math.ceil(integerPageNumber));
    }, [itemOffset, itemsPerPage, imageId]);


    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % (filterImg?.map(e => (e?.idList))[0]?.length);
        setItemOffset(newOffset);
    };
    // ----------------------------------------------------------------------




    return (
        <>
            <div className="container my-5">
                <ScrollToTop smooth color='#1B202C' />
                <h3 className='image-item-heading mb-4'>{filterImg[0]?.folderName}</h3>
                <div className="row row-cols-2 row-cols-md-5 g-3">

                    {
                        control === true ? (
                            currentItems[0]?.map((id, index, arr) => (
                                <div className="list">
                                    <LazyLoad height={200} once>
                                        <div className='col' key={id}>
                                            <div className="img-item">
                                                {/* --> image zoom on click --> */}
                                                <Zoom>
                                                    <img className='img-thumbnail img-responsive style-img' src={`https://drive.google.com/uc?id=${id}`} alt="" />
                                                </Zoom>

                                                {/* --> click and open image on a modal --> */}
                                                {/* <div className="icon-div">
                                                    <i data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setImgIdToModal(id)} className="bi bi-arrows-fullscreen fullscreen-arrow"></i>
                                                </div> */}
                                            </div>
                                            <figcaption className='img-fig'>
                                                hafizurrahmanbu{filterImg?.map(e => e?.driveName)}@gmail.com
                                            </figcaption>
                                        </div>
                                    </LazyLoad>
                                </div>
                            ))
                        ) : (
                            <div className="spiner_section">
                                <HashLoader color='white' />
                            </div>

                        )
                    }

                    {/* ---------------------------Open modal----------------  */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div style={{ backgroundColor: '#1b202c' }} className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Full Screen Image</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <img className='img-fluid modal-img' src={`https://drive.google.com/uc?id=${imgIdToModal}`} alt="" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

            {control === true ? (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="⇾"  // also write next >
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="⇽"  // also write < previous
                    renderOnZeroPageCount={null}
                    containerClassName='pagination'
                    pageLinkClassName='menu'
                    previousLinkClassName='page-num'
                    nextLinkClassName='page-num'
                    activeLinkClassName='active'
                    pageClassName='page-style'
                />
            ) : ''}
        </>
    );
};

export default ImageFolder;








