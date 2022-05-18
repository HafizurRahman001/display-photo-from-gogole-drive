import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router';
import GetId from '../../useState/GetId';
import './imageFolder.css';

const ImageFolder = () => {
    const [imageId, setImageId, control, setControl] = GetId();
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


    const itemsPerPage = 20;
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
                <h3>{filterImg[0]?.folderName}</h3>
                <div className="row">

                    {
                        control === true ? (
                            currentItems[0]?.map((id, index) => (
                                <div className='col-md-3 col-6 g-3' key={id}>
                                    <img className='img-thumbnail img-fluid style-img' src={`https://drive.google.com/uc?id=${id}`} alt="" />
                                    <figcaption className='img-fig'>hafizurrahmanbu{filterImg?.map(e => e?.driveName)}@gmail.com</figcaption>
                                </div>
                            ))
                        ) : (
                            <h1>Loading....</h1>

                        )
                    }

                </div>
            </div >

            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"  // also write next >
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="◀"  // also write < previous
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

export default ImageFolder;




