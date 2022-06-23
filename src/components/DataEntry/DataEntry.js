import React from 'react';
import { useForm } from 'react-hook-form';
import './DataEntry.css'

const DataEntry = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const date = new Date();
    let monthCount = date.getMonth() + 1;
    if (monthCount < 10) {
        monthCount = '0' + monthCount;
    }
    let dateCount = date.getDate();
    if (dateCount < 10) {
        dateCount = '0' + dateCount;
    }
    let yearCount = date.getFullYear();


    const onSubmit = (data) => {
        let imageIdObject = {}
        const splitLink = data.idList.split(',');
        imageIdObject.idList = splitLink;
        imageIdObject.date = dateCount + '/' + monthCount + '/' + yearCount;
        imageIdObject.driveName = data?.driveName;
        imageIdObject.folderName = data?.folderName;


        fetch('https://desolate-sierra-46653.herokuapp.com/linkArray', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(imageIdObject)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    window.alert('successfully added')
                    reset()
                }
            })
    }



    return (
        <div>
            <div className="input_text my-3">
                <h2>Enter Your Image Id Link:</h2>
            </div>
            <div className="input_div">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <textarea style={{ color: 'white' }} cols='57' className='me-1 text-area-input' {...register("idList", { required: true })} placeholder="Enter images Id. (e.g hafiz,mamun,morium)" />

                    {/* bootstrap offcanvas button */}
                    <span className="data-entry-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight1" aria-controls="offcanvasRight"><i className="bi bi-info-circle-fill data-entry-icon-style"></i></span>

                    {/* errors will return when field validation fails  */}
                    {errors.idList && <span className='error-msg'> <br /> This field is required</span>}
                    <br />

                    <input style={{ width: '29%', marginBottom: '7px', color: 'white' }} className='me-1 data-entry-input' {...register("driveName", { required: true })} placeholder="Drive email number (e.g 07)" />

                    {/* bootstrap offcanvas button */}
                    <span className="data-entry-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight"><i className="bi bi-info-circle-fill data-entry-icon-style"></i></span>

                    {errors.driveName && <span className='error-msg'><br />This field is required</span>}<br />

                    <input style={{ width: '29%', marginBottom: '7px', color: 'white' }} className='me-1 data-entry-input' {...register("folderName", { required: true })} placeholder="Drive folder Name (e.g hafiz)" />

                    {/* bootstrap offcanvas button */}
                    <span className="data-entry-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight3" aria-controls="offcanvasRight"><i className="bi bi-info-circle-fill data-entry-icon-style"></i></span>

                    {errors.folderName && <span className='error-msg'><br /> This field is required</span>}

                    <br />

                    <div className="submit-btn-section">
                        <input className='submit-btn' type="submit" />
                    </div>
                </form>
            </div>



            {/* bootstrap off canvas 1 */}

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight1" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header offCanvas-style">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">...</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-start">
                    খুবি সুন্দর প্রশ্ন
                </div>
            </div>

            {/* bootstrap off canvas 2 */}

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header offCanvas-style">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>

            {/* bootstrap off canvas 3 */}

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight3" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header offCanvas-style">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    ...
                </div>
            </div>


        </div>

    );
};

export default DataEntry;


