import { createContext, useContext, useState } from 'react';
import { items } from '../data';

const Context = createContext();

function ContextAPI() {
    const [data, setData] = useState(items);
    const removeItem = (id) => setData((prevData) => prevData.filter((data) => data.id !== id));
    const reloadData = () => setData(items);
    return (
        <Context.Provider value={{ data, removeItem }}>
            <h1>useContext</h1>
            {data.length > 0 && <List />}
            <div className="row">
                {data.length === 0 && <div className="modal">All items removed</div>}
                {data.length === 0 && (
                    <button className="btn" onClick={reloadData}>
                        Reload data
                    </button>
                )}
            </div>
        </Context.Provider>
    );
}

const List = () => {
    const { data } = useContext(Context);
    return (
        <div className="container list">
            {data.map((item) => (
                <SingleItem {...item} key={item.id} />
            ))}
        </div>
    );
};

const SingleItem = ({ id, item }) => {
    const { removeItem } = useContext(Context);
    return (
        <div className="list-item">
            {item}
            <button className="btn btn-remove" onClick={() => removeItem(id)}>
                Remove
            </button>
        </div>
    );
};

export default ContextAPI;
