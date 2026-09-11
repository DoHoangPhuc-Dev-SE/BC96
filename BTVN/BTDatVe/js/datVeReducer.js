import { DAT_GHE, HUY_GHE } from './datVeType';

const stateDefault = {
  danhSachGheDangChon: []
};
export const datVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheCapNhat = [...state.danhSachGheDangChon];
      let index = danhSachGheCapNhat.findIndex(
        gheDangChon => gheDangChon.soGhe === action.ghe.soGhe
      );

      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.ghe);
      }

      return { ...state, danhSachGheDangChon: danhSachGheCapNhat };
    }
    case HUY_GHE: {
      let danhSachGheCapNhat = state.danhSachGheDangChon.filter(
        gheDangChon => gheDangChon.soGhe !== action.soGhe
      );
      return { ...state, danhSachGheDangChon: danhSachGheCapNhat };
    }
    default:
      return { ...state };
  }
};