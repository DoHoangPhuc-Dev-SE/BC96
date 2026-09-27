import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSinhVien extends Component {
  state = {
    values: {
      maSV: '',
      hoTen: '',
      soDienThoai: '',
      email: ''
    },
    errors: {
      maSV: '',
      hoTen: '',
      soDienThoai: '',
      email: ''
    },
    isEdit: false
  };
  labelName = {
    maSV: 'Mã SV',
    hoTen: 'Họ tên',
    soDienThoai: 'Số điện thoại',
    email: 'Email'
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.sinhVienChinhSua) {
      this.setState({
        values: nextProps.sinhVienChinhSua,
        isEdit: true,
        errors: { maSV: '', hoTen: '', soDienThoai: '', email: '' }
      });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const pattern = e.target.getAttribute('pattern');
    let newValues = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };
    if (value.trim() === '') {
      newErrors[name] = `${this.labelName[name]} không được để trống!`;
    } else {
      newErrors[name] = '';
    }
    if (pattern && value.trim() !== '') {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        newErrors[name] = `${this.labelName[name]} không đúng định dạng!`;
      }
    }
    this.setState({
      values: newValues,
      errors: newErrors
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { values, errors, isEdit } = this.state;
    let newErrors = { ...errors };
    let valid = true;
    for (let key in values) {
      if (values[key].trim() === '') {
        newErrors[key] = `${this.labelName[key]} không được để trống!`;
        valid = false;
      }
    }
    for (let key in errors) {
      if (errors[key] !== '') {
        valid = false;
      }
    }
    if (!valid) {
      this.setState({ errors: newErrors });
      return;
    }
    if (isEdit) {
      this.props.dispatch({
        type: 'CAP_NHAT_SINH_VIEN',
        payload: values
      });
      this.setState({ isEdit: false });
    } else {
      const isExist = this.props.danhSachSinhVien.some((sv) => sv.maSV === values.maSV);
      if (isExist) {
        this.setState({
          errors: { ...newErrors, maSV: 'Mã sinh viên này đã tồn tại!' }
        });
        return;
      }
      this.props.dispatch({
        type: 'THEM_SINH_VIEN',
        payload: values
      });
    }
    this.setState({
      values: { maSV: '', hoTen: '', soDienThoai: '', email: '' },
      errors: { maSV: '', hoTen: '', soDienThoai: '', email: '' }
    });
  };

  render() {
    const { values, errors, isEdit } = this.state;
    return (
      <div className="card mb-4">
        <div className="card-header bg-dark text-white font-weight-bold">
          Thông tin sinh viên
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6 mb-3">
                <label>Mã SV</label>
                <input
                  disabled={isEdit}
                  type="text"
                  className="form-control"
                  name="maSV"
                  value={values.maSV}
                  onChange={this.handleChange}
                />
                <span className="text-danger">{errors.maSV}</span>
              </div>
              <div className="col-6 mb-3">
                <label>Họ tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="hoTen"
                  value={values.hoTen}
                  onChange={this.handleChange}
                />
                <span className="text-danger">{errors.hoTen}</span>
              </div>
              <div className="col-6 mb-3">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  pattern="^[0-9]+$"
                  className="form-control"
                  name="soDienThoai"
                  value={values.soDienThoai}
                  onChange={this.handleChange}
                />
                <span className="text-danger">{errors.soDienThoai}</span>
              </div>
              <div className="col-6 mb-3">
                <label>Email</label>
                <input
                  type="text"
                  pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                  className="form-control"
                  name="email"
                  value={values.email}
                  onChange={this.handleChange}
                />
                <span className="text-danger">{errors.email}</span>
              </div>
            </div>
            {isEdit ? (
              <button type="submit" className="btn btn-primary">
                Cập nhật sinh viên
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                Thêm sinh viên
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  sinhVienChinhSua: state.quanLySinhVienReducer.sinhVienChinhSua,
  danhSachSinhVien: state.quanLySinhVienReducer.danhSachSinhVien
});

export default connect(mapStateToProps)(FormSinhVien);