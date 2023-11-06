import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // ensure you have imported these from 'reactstrap'
import done from '../assets/done.png'
const ConfirmPopup = ({ isOpen, handleClosePopup }) => {
    return (
        <Modal isOpen={isOpen} toggle={handleClosePopup}>
            <ModalHeader toggle={handleClosePopup}>Order Confirmed</ModalHeader>
            <ModalBody>
                <div className="container">
                    <div className="row d-flex cart align-items-center justify-content-center">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-6 border-right p-5">
                                    <div className="text-center order-details">
                                        <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                                            <span className="check1"><img src={done}/></span>
                                            <h3 className="font-weight-bold">Order Confirmed</h3>
                                            <a href="#" className="text-decoration-none invoice-link">View Invoice</a>
                                        </div>
                                        <a href="/nike_webshop/catalog" className="btn btn-danger btn-block order-button">Go to Product</a>
                                    </div>
                                </div>
                                <div className="col-md-6 background-muted">
                                    <div className="p-3 border-bottom">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span><i className="fa fa-clock-o text-muted"></i> 3 days delivery</span>
                                            <span><i className="fa fa-refresh text-muted"></i> 2 Max Revisions</span>
                                        </div>
                                        <div className="mt-3">
                                            <h6 className="mb-0">Illustration in Sketch or AI</h6>
                                            <span className="d-block mb-0">Includes: Sketch, PSD, PNG, SVG, AI</span>
                                        </div>
                                    </div>
                                    <div className="row g-0 border-bottom">
                                        <div className="col-md-6 border-right">
                                            <div className="p-3 d-flex justify-content-center align-items-center"> <span>x3</span> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 d-flex justify-content-center align-items-center"> <span>$20 per unit</span> </div>
                                        </div>
                                    </div>
                                    <div className="row g-0 border-bottom">
                                        <div className="col-md-6">
                                            <div className="p-3 d-flex justify-content-center align-items-center"> <span>Subtotal</span> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 d-flex justify-content-center align-items-center"> <span>$60</span> </div>
                                        </div>
                                    </div>
                                    <div className="row g-0 border-bottom">
                                        <div className="col-md-6">
                                            <div className="p-3 d-flex justify-content-center align-items-center"> <span>Processing fees</span> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 d-flex justify-content-center align-items-center"> <span>$1.80</span> </div>
                                        </div>
                                    </div>
                                    <div className="row g-0">
                                        <div className="col-md-6">
                                            <div className="p-3 d-flex justify-content-center align-items-center"> <span className="font-weight-bold">Total</span> </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 d-flex justify-content-center align-items-center"> <span className="font-weight-bold">$61.80</span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button onClick={handleClosePopup}>Close</button>
            </ModalFooter>
        </Modal>
    )
}
export default ConfirmPopup;
