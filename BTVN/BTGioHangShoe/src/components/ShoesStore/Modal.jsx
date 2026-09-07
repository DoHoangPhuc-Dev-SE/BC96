import React from 'react';

export default function Modal({ content }) {
  if (!content) return null;

  return (
    <div
      className="modal fade"
      id="detailModal"
      tabIndex="-1"
      aria-labelledby="detailModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="detailModalLabel">
              {content.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-5">
                <img src={content.image} alt={content.name} className="img-fluid" />
              </div>
              <div className="col-7">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row">Name</th>
                      <td>{content.name}</td>
                    </tr>
                    <tr>
                      <th scope="row">Alias</th>
                      <td>{content.alias}</td>
                    </tr>
                    <tr>
                      <th scope="row">Price</th>
                      <td>${content.price}</td>
                    </tr>
                    <tr>
                      <th scope="row">Description</th>
                      <td>{content.description}</td>
                    </tr>
                    <tr>
                      <th scope="row">Short Description</th>
                      <td>{content.shortDescription}</td>
                    </tr>
                    <tr>
                      <th scope="row">Quantity</th>
                      <td>{content.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}