import { useEffect, useState } from 'react';

const GetId = () => {
    const [idList, setIdList] = useState();

    useEffect(() => {
        fetch('./imageIdData.json')
            .then(res => res.json())
            .then(data => setIdList(data))
    }, [])

    return [idList, setIdList]
};

export default GetId;