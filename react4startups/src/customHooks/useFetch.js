import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = useCallback(async () => {
        const response = await fetch(url);
        const dataJSON = await response.json();
        setData(dataJSON);
        setIsLoading(false);
    }, [url]);

    useEffect(() => {
        getData();
    }, [url, getData]);

    return { isLoading, data };
};
