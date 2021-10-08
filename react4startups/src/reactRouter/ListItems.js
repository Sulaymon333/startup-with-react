import { useState } from 'react';
import { items } from '../data';
import { Link } from 'react-router-dom';

const Items = () => {
    const [data, setData] = useState(items);
    return (
        <div className="container list">
            {data.map((item) => {
                return (
                    <div key={item.id} className="list-item">
                        {item.item}
                        <Link className="btn btn-link" to={`/items/${item.id}`}>
                            Read more
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Items;
