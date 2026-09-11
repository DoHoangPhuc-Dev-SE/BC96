import React from 'react';
import danhSachGheData from '../danhSachGhe.json';
import HangGhe from './HangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';
import "../BaiTapBookingTicket.css";

export default function BaiTapDatVePhim() {
  return (
    <div style={{ backgroundColor: '#181818', minHeight: '100vh', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '30px' }}>
        <div style={{ flex: 2, textAlign: 'center' }}>
          <h2 style={{ color: '#ffc107' }}>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
          <p style={{ color: '#fff', margin: '10px 0' }}>Màn hình</p>
          <div style={{ height: '15px', backgroundColor: '#orange', background: 'orange', marginBottom: '25px', borderRadius: '4px' }}></div>
          {danhSachGheData.map((hangGhe, index) => (
            <HangGhe key={index} hangGhe={hangGhe} soHangGhe={index} />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          <ThongTinDatGhe />
        </div>
      </div>
    </div>
  );
}