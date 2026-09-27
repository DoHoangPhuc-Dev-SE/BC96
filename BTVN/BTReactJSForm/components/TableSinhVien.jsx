import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableSinhVien extends Component {
  handleSearch = (e) => {
    this.props.dispatch({
      type: 'TIM_KIEM_SINH_VIEN',
      payload: e.target.value
    });
  };

  render() {
    const { danhSachSinhVien, tuKhoaTimKiem, dispatch } = this.props;
    const danhSachLoc = danhSachSinhVien.filter((sv) => {
      const keyword = tuKhoaTimKiem.toLowerCase().trim();
      return (
        sv.hoTen.toLowerCase().includes(keyword) ||
        sv.maSV.toLowerCase().includes(keyword)
      );
    });

    return (
      <div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập mã hoặc tên sinh viên để tìm kiếm..."
            value={tuKhoaTimKiem}
            onChange={this.handleSearch}
          />
        </div>
        <table className="table table-bordered text-center">
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Quản lý</th>
            </tr>
          </thead>
          <tbody>
            {danhSachLoc.length > 0 ? (
              danhSachLoc.map((sv) => (
                <tr key={sv.maSV}>
                  <td>{sv.maSV}</td>
                  <td>{sv.hoTen}</td>
                  <td>{sv.soDienThoai}</td>
                  <td>{sv.email}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => dispatch({ type: 'SUA_SINH_VIEN', payload: sv })}
                    >
                      Sửa
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch({ type: 'XOA_SINH_VIEN', payload: sv.maSV })}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Không tìm thấy sinh viên nào</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  danhSachSinhVien: state.quanLySinhVienReducer.danhSachSinhVien,
  tuKhoaTimKiem: state.quanLySinhVienReducer.tuKhoaTimKiem
});

export default connect(mapStateToProps)(TableSinhVien);