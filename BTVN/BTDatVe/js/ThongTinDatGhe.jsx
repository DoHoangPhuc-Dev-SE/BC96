import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { huyGheAction } from './datVeAction';

export default function ThongTinDatGhe() {
  const dispatch = useDispatch();
  const { danhSachGheDangChon } = useSelector(state => state.datVeReducer);
  const tongTien = danhSachGheDangChon.reduce(
    (tong, ghe) => tong + ghe.gia,
    0
  );
  return (
    <div style={{ color: '#fff' }}>
      <h3 style={{ textAlign: 'center', color: '#ffc107' }}>DANH SÁCH GHẾ BẠN CHỌN</h3>
      <div style={{ marginTop: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <button className="ghe gheDuocChon" style={{ margin: 0 }}></button>
          <span>Ghế đã đặt</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <button className="ghe gheDangChon" style={{ margin: 0 }}></button>
          <span>Ghế đang chọn</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
          <button className="ghe" style={{ margin: 0 }}></button>
          <span>Ghế chưa đặt</span>
        </div>
      </div>
      <table border="2" style={{ width: '100%', borderColor: '#fff', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ color: '#ffc107' }}>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {danhSachGheDangChon.map((ghe) => (
            <tr key={ghe.soGhe}>
              <td>{ghe.soGhe}</td>
              <td>{ghe.gia.toLocaleString()} VNĐ</td>
              <td>
                <button
                  style={{ color: 'red', cursor: 'pointer', background: 'transparent', border: 'none', fontWeight: 'bold' }}
                  onClick={() => dispatch(huyGheAction(ghe.soGhe))}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ color: '#ffc107' }}>
            <td><strong>Tổng tiền</strong></td>
            <td colSpan="2">
              <strong>{tongTien.toLocaleString()} VNĐ</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}