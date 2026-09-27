const initialState = {
  danhSachSinhVien: [
    { maSV: '1', hoTen: 'Nguyễn Văn A', soDienThoai: '0938111111', email: 'nguyenvana@gmail.com' },
    { maSV: '2', hoTen: 'Nguyễn Văn B', soDienThoai: '0938222232', email: 'nguyenvanb@gmail.com' }
  ],
  sinhVienChinhSua: null,
  tuKhoaTimKiem: ''
};

export const quanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'THEM_SINH_VIEN': {
      const danhSachSinhVienCapNhat = [...state.danhSachSinhVien, action.payload];
      return { ...state, danhSachSinhVien: danhSachSinhVienCapNhat };
    }
    case 'XOA_SINH_VIEN': {
      const danhSachSinhVienCapNhat = state.danhSachSinhVien.filter(
        (sv) => sv.maSV !== action.payload
      );
      return { ...state, danhSachSinhVien: danhSachSinhVienCapNhat };
    }
    case 'SUA_SINH_VIEN': {
      return { ...state, sinhVienChinhSua: action.payload };
    }
    case 'CAP_NHAT_SINH_VIEN': {
      const danhSachSinhVienCapNhat = state.danhSachSinhVien.map((sv) => {
        if (sv.maSV === action.payload.maSV) {
          return action.payload;
        }
        return sv;
      });
      return {
        ...state,
        danhSachSinhVien: danhSachSinhVienCapNhat,
        sinhVienChinhSua: null
      };
    }
    case 'TIM_KIEM_SINH_VIEN': {
      return { ...state, tuKhoaTimKiem: action.payload };
    }
    default:
      return state;
  }
};