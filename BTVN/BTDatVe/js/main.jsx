import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './rootReducer';
import BaiTapDatVePhim from './BaiTapDatVePhim';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BaiTapDatVePhim />
    </Provider>
  </React.StrictMode>
);