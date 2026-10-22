import React from "react";

export default function Cart({ cartData, changeQuantity }) {
  const totalQuatity = () => {
    return cartData.reduce((total, item) => {
      return total + item.soLuong;
    }, 0);
  };
  
  const totalMoney = () => {
    return cartData.reduce((total, item) => {
      return total + item.soLuong * item.giaBan;
    }, 0);
  };

  return (
    <>
      <div className="text-end mb-4">
        <button
          className="btn btn-sm btn-outline-danger"
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        >
          Giỏ hàng ({totalQuatity()})
        </button>
      </div>

      {/* bs5-modal-default  */}
      <div
        className="modal fade"
        id="modalId"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Giỏ hàng
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered text-center align-middle">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) => {
                    return (
                      <tr key={item.maSP}>
                        <td>{item.maSP}</td>
                        <td>
                          <img
                            src={item.hinhAnh}
                            alt={item.tenSP}
                            style={{
                              width: "70px",
                              height: "70px",
                              objectFit: "contain",
                            }}
                          />
                        </td>
                        <td>{item.tenSP}</td>

                        <td>
                          <button 
                            className="btn btn-primary btn-sm me-1"
                            onClick={() => { changeQuantity(item.maSP, -1); }}
                          >-</button>
                          {item.soLuong}
                          <button 
                            className="ms-1 btn btn-primary btn-sm"
                            onClick={() => { changeQuantity(item.maSP, 1); }}
                          >+</button>
                        </td>
                        <td>{item.giaBan.toLocaleString()}</td>
                        <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
                        <td>
                          <button className="btn btn-sm btn-danger">Xoá</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="fw-bold text-end">
                      Tổng tiền:{" "}
                    </td>
                    <td>{totalMoney().toLocaleString()} VNĐ</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}