import React from 'react'

export default function ProductItem({item,viewDetail, addToCart}) {
  return (
   <div className="col-md-4">
            <div className="card h-100 text-center p-3">
              <img
                className="card-img-top p-3"
                style={{ height: "300px",objectFit:'contain' }}
                src={item.hinhAnh}
                alt={item.tenSP}
              />
              <div className="card-body">
                <h4 className="card-title">{item.tenSP}</h4>
                <p className="text-danger fw-bold">
                  {item.giaBan.toLocaleString()} VNĐ
                </p>
                <button className="btn btn-sm btn-success me-2" onClick={()=>viewDetail(item)}>
                  Xem chi tiết
                </button>
                <button className="btn btn-sm btn-danger" onClick={()=>addToCart(item)}>Thêm giỏ hàng</button>
              </div>
            </div>
          </div>
  )
}