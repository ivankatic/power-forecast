import React from 'react';
import ReactDOM from 'react-dom';
import Location from './Location';
import LocationBox from './LocationBox';

const Modal = (props) => {
    if (!props.show) { return null };
    return ReactDOM.createPortal(
        <div className={`modal__background ${props.show ? "" : "modal__hide"}`}>
            <div className="modal">
                <Location />
                <LocationBox />
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;