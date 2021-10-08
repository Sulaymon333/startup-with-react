import Modal from './Modal';
import { reducer } from './reducer';
import { useState, useReducer, useRef, useEffect } from 'react';

const initialState = {
    items: [],
    isModalOpen: false,
    modalContent: '',
};

function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    const handleModalClose = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };
    return (
        <>
            <h1>useReducer</h1>
            {state.isModalOpen && <Modal modalContent={state.modalContent} handleModalClose={handleModalClose} />}
            <Form dispatch={dispatch} />
            {state.items.length > 0 && <List items={state.items} dispatch={dispatch} />}
        </>
    );
}

const Form = ({ dispatch }) => {
    const [itemName, setItemName] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => {
        setItemName(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { id: new Date().getTime().toString(), itemName };

        if (itemName) {
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            setItemName('');
        } else {
            dispatch({ type: 'NO_DATA' });
        }
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" value={itemName} className="form-input" ref={inputRef} onChange={handleChange} />
            <button type="submit" className="btn btn-add">
                Add
            </button>
        </form>
    );
};

const List = ({ items, dispatch }) => {
    const handleClear = () => {
        dispatch({ type: 'CLEAR_LIST' });
    };
    return (
        <div className="container list">
            {items.map((item) => {
                return <SingleItem {...item} key={item.id} id={item.id} dispatch={dispatch} items={items} />;
            })}
            <div className="btn btn-clear" onClick={handleClear}>
                Clear All
            </div>
        </div>
    );
};

const SingleItem = ({ itemName, id, dispatch }) => {
    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };
    return (
        <div className="list-item">
            <p>{itemName}</p>
            <button className="btn btn-remove" onClick={() => handleRemove(id)}>
                Remove
            </button>
        </div>
    );
};

export default Reducer;
