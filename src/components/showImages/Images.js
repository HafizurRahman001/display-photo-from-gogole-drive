import React from 'react';
import GetId from '../../useState/GetId';
import './Images.css'

const Images = () => {
    const [imageId, setImageId, control, setControl] = GetId();


    let arr = [(imageId[0])]
    let arr2 = []
    arr2.push(arr[0]?.idList);







    return (
        <div className="container my-5">
            <div className="row">
                {control === true ? (
                    arr2[0]?.map(e => (
                        <div className='col-md-3 col-4 g-3' key={e}>
                            <img className='img-thumbnail img-fluid style-img' src={`https://drive.google.com/uc?id=${e}`} alt="" />
                        </div>
                    ))
                ) : (
                    <h1>Loading.....</h1>
                )
                }
            </div>

        </div>
    );
};

export default Images;
