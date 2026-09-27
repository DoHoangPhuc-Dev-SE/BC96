import React, { Component } from 'react';
import FormSinhVien from './FormSinhVien';
import TableSinhVien from './TableSinhVien';

export default class QuanLySinhVien extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">Bài Tập React Form - Validation & Redux</h2>
        <FormSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}