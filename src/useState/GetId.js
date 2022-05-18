import { useEffect, useState } from 'react';

const GetId = () => {
    const [imageId, setImageId] = useState([]);
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

    return [imageId, setImageId, control, setControl]
};

export default GetId;