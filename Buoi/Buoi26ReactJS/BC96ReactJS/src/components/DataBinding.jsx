//rfc
import React from "react";

export default function DataBinding() {
  const name = "Nguyễn Văn A";
  const isOnline = false;
  const price = 1000000;
  const quantity = 4;

  const ho = "Nguyễn";
  const ten = "Châu";

  const getFullName = () => {
    let fullname =  `${ho} ${ten}`;
    return fullname
  };


  const student = {
    id: 1,
    name: "Lê Thị Bé",
    age:20,
    score: 8.5
  }
  //
  return (
    <div className="container mt-4">
      <h2>Data binding</h2>
      <p>
        <b>Họ tên: </b>
        {name}
      </p>
      <p>
        <b>Trạng thái: </b>
        {/* binding giá trị bằng JS bình thường chỉ cần đặt trong {}  */}
        {isOnline ? "Đang hoạt động" : "Offline"}
      </p>
      <p>
        <b>Thành tiền :</b>
        {price * quantity}
      </p>
      <p>
        <b>HỌ & TÊN: </b>
        {/* nghĩa là gọi hàm và lấy giá trị hàm return để render. */}
        {getFullName()}
      </p>
      <hr width ='50%' />
      <h2>Thông tin sinh viên</h2>
      <p>
        <b>Mã SV: </b>
        {student.id}
      </p>
      <p>
        <b>Họ tên: </b>
        {student.name}
      </p>
      <p>
        <b>Tuổi: </b>
        {student.age}
      </p>
      <p>
        <b>Điểm: </b>
        {student.score}
      </p>
      <p>
        <b>Kết quả: </b>
        {student.score > 5 ? "Đậu" : "Rớt"}
      </p>
    </div>

  );
}