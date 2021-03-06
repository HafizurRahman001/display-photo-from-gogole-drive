import { useEffect, useState } from 'react';

const GetId = () => {
    const [imageId, setImageId] = useState([]);
    const [control, setControl] = useState(true);
    const [darkMode, setDarkMode] = useState({});

    useEffect(() => {
        setControl(false)
        fetch('https://desolate-sierra-46653.herokuapp.com/link-id')
            .then(res => res.json())
            .then(data => {
                setImageId(data)
            }).finally(() => {
                setControl(true)
            })
    }, []);

    return [imageId, setImageId, control, setControl, darkMode, setDarkMode]
};

export default GetId;