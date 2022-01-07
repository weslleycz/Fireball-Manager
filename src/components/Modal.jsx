import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css";
export default (props) => {
  return (
    <>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <h6>{props.text}</h6>
            </div>
            <div className="modal-footer">
              <div className="modalButon">
              <button type="button" onClick={props.Funcao} className="btn btn-primary">{props.buttonOne}</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
               {props.buttonTwo}</button>
               </div>
            </div>
          </div>
          </div>
        </div>
    </>
  )
}
