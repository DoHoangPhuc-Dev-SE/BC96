import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { datGheAction } from './datVeAction';

export default function HangGhe({ hangGhe, soHangGhe }) {
  const dispatch = useDispatch();
  const { danhSachGheDangChon } = useSelector(state => state.datVeReducer);
  if (soHangGhe === 0) {
    return (
      <div style={{ marginLeft: '30px' }}>
        {hangGhe.hang}
        {hangGhe.danhSachGhe.map((ghe, index) => (
          <button key={index} className="rowNumber">
            {ghe.soGhe}
          </button>
        ))}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
      <span className="firstChar" style={{ width: '30px', fontWeight: 'bold', color: '#ffc107' }}>
        {hangGhe.hang}
      </span>
      {hangGhe.danhSachGhe.map((ghe) => {
        let cssGhe = 'ghe';
        let disabled = false;
        if (ghe.daDat) {
          cssGhe = 'gheDuocChon';
          disabled = true;
        }
        let indexGheDangChon = danhSachGheDangChon.findIndex(
          g => g.soGhe === ghe.soGhe
        );
        if (indexGheDangChon !== -1) {
          cssGhe = 'gheDangChon';
        }
        return (
          <button
            key={ghe.soGhe}
            disabled={disabled}
            className={`ghe ${cssGhe}`}
            onClick={() => dispatch(datGheAction(ghe))}
          >
            {ghe.soGhe}
          </button>
        );
      })}
    </div>
  );
}