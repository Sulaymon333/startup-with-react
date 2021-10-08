import '../App.css';
import { useEffect } from 'react';

const Modal = ({ modalContent, handleModalClose }) => {
    useEffect(() => {
        setTimeout(() => handleModalClose(), 1500);
    });

    return <div className="modal">{modalContent}</div>;
};

export default Modal;
