import React from 'react';
const modalMain = {backgroundColor: '#fff',borderRadius: 5,maxWidth: 500,minHeight: 300,margin: '0 auto'}
const displayBlock = {position: 'fixed',top: 0,bottom: 0,left: 0,right: 0,backgroundColor: 'rgba(0,0,0,0.3)',padding: 50,display: 'block'}
const displayNone = {display: 'none'}
const modalImg = {width: '100%'};
const Modal = ({ handleClose, show, value }) => {
    let showHideClassname = show ? displayBlock : displayNone
    return (
        <div>
          {
              value.length > 0 ?
              (
                <div className="modal" style={showHideClassname}>
                    <section style={modalMain}>  
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{value[0].title}</h5>
                                    <button type="button" className="close" onClick={handleClose} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p><img src={value[0].image} alt={value[0].title} style={modalImg}/></p>
                                    <h4>${value[0].price}</h4>
                                    <p>{value[0].description}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                )
              :
              null
          }
        </div>
    );
  };

export default Modal;