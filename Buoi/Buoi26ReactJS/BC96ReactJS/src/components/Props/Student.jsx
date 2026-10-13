// dùng map để render ra ds student
// student
import React from "react";

export default function Student({ id, age, score, name, deleteStudent }) {
  console.log("👉 id", id);
  return (
    <div className="col-3">
      <div className="card p-3">
        <h4>{name}</h4>
        <p>
          {" "}
          <b>Tuổi: </b>
          {age}
        </p>
        <p>
          {" "}
          <b>Điểm: </b>
          {score}
        </p>
        <p>
          {" "}
          <b>Kết quả: </b>
          {score > 5 ? "Đậu" : "Rớt"}
        </p>
        <div className="card-footer d-flex justify-content-end">
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => deleteStudent(id)}
          >
            Xoá
          </button>
        </div>
      </div>
    </div>
  );
}