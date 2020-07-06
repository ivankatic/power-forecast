import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Location from './Location';
import LocationBox from './LocationBox';

class Modal extends Component {
    constructor(show) {
        super(show);
        this.state = { show: true };
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };   
    
    addMapValues = () => {
        this.props.addMapValues();
    }

    render() {
        if (!this.props.show) { return null };

        return ReactDOM.createPortal(
            <div className={`modal__background ${this.props.show ? "" : "modal__hide"}`}>
                <div className="modal">
                    <Location />
                    <LocationBox onClose={this.onClose} />
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }
}

export default Modal;