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
        console.log(date.getDate());
        let imageIdObject = {}
        const splitLink = data.idList.split(',');
        imageIdObject.idList = splitLink;
        imageIdObject.date = dateCount + '/' + monthCount + '/' + yearCount;
        imageIdObject.driveName = 'drive No: ' + data?.driveName;
        console.log(imageIdObject);
        fetch('http://localhost:5000/linkArray', {
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
                    <textarea cols='46' className='me-1' {...register("idList", { required: true })} placeholder="Enter images Id. (e.g hafiz,mamun,morium)" />
                    {/* errors will return when field validation fails  */}
                    {errors.idList && <span className='error-msg'>This field is required</span>}
                    <br />
                    <input style={{ width: '29%', marginBottom: '7px' }} className='me-1' {...register("driveName", { required: true })} placeholder="Drive email number (e.g 07)" /><br />
                    {errors.driveName && <span className='error-msg'>This field is required</span>}
                    <div className="submit-btn-section">
                        <input className='submit-btn' type="submit" />
                    </div>
                </form>
            </div>

        </div>

    );
};

export default DataEntry;