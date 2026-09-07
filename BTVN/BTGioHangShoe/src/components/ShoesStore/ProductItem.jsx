import React from 'react';

export default function ProductItem({ item, setStateModal }) {
  return (
    <div className="col-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fs-6">{item.name}</h5>
            <p className="card-text text-muted fw-bold">${item.price}</p>
          </div>
          <button
            className="btn btn-dark w-100"
            data-bs-toggle="modal"
            data-bs-target="#detailModal"
            onClick={() => setStateModal(item)}
          >
            add to carts <i className="fa fa-shopping-cart ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}