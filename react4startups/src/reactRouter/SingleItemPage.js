import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { items } from '../data';

const SingleItemPage = () => {
    const [item, setItem] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const singleItemData = items.find((item) => item.id === parseInt(id));
        const findIndex = items.findIndex((item) => item.id === parseInt(id));

        if (findIndex >= 0) {
            setItem(singleItemData.item);
        } else {
            setItem('No matching item');
        }
    }, [id]);

    return (
        <div className="container">
            <div className="list-item py-2">
                {item}
                <Link to="/items" className="btn btn-link">
                    Back to Items
                </Link>
            </div>
        </div>
    );
};

export default SingleItemPage;
