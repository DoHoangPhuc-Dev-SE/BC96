import React, { useState } from "react";
import Product from "./Product";
import Student from "./Student";

export default function PropsComponent() {
  const [students, setStudent] = useState([
    {
      id: "SV01",
      name: "Nguyễn Minh An",
      age: 20,
      score: 9,
    },
    {
      id: "SV02",
      name: "Trần Văn Anh",
      age: 21,
      score: 9,
    },
    {
      id: "SV03",
      name: "Lê Minh Bình",
      age: 20,
      score: 9,
    },
    {
      id: "SV04",
      name: "Nguyễn Văn Châu",
      age: 20,
      score: 7,
    },
    {
      id: "SV05",
      name: "Nguyễn Gia Khang",
      age: 18,
      score: 8,
    },
  ]);
  const deleteStudent = (id) => {
    console.log(id);
    // get ra ds moi khong co id tuong ungw
    //  1 !== 1 => false
    // 1  !=  1 => false
    // 1 !== '1' => true
    let newLs = students.filter((item) => item.id !== id);
    console.log("👉 newLs", newLs);
    setStudent(newLs);
  };
  const addStudent = (event) => {
    event.preventDefault();
    console.log("👉 event", event);

    console.log("👉 id", event.target.id.value);
    console.log("👉 name", event.target.name.value);

    let id = event.target.id.value;
    let name = event.target.name.value;
    // thêm 2 ô nhạp liệu cho điểm và tuôi
    let age = event.target.age.value;
    let score = event.target.score.value;
    const newStu = {
      id,
      name,
      age,
      score,
    };
    
    // const newStu = {
    //   id: id,
    //   name: name,
    //   age: age,
    //   score: score,
    // };
    // tạo bảng sao
    let studentClone = [...students];
    // thêm vào bảng sao
    studentClone.push(newStu);
    // update bảng sao vào state
    setStudent(studentClone);

    console.log("👉 students", students);
    console.log("👉 newStu", newStu);
  };
  return (
    <div className="container my-4">
      <h2 className="text-center">Product List</h2>
      <div className="row">
        <Product name="iPhone 15" price="20000000" />
        <Product name="iPhone 16" price="25000000" />
        <Product name="iPhone 17" price="30000000" />
      </div>
      <br />
      <br />
      <h2>Student list</h2>
      <form className="w-50 mx-auto my-5" onSubmit={addStudent}>
        <div className="form-group">
          <label htmlFor="id">Id</label>
          <input
            className="form-control"
            type="text"
            id="id"
            placeholder="Nhập mã sinh viên"
          />
        </div>
        {/* name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            placeholder="Nhập tên sinh viên"
          />
        </div>
        {/* age */}
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            className="form-control"
            type="number"
            id="age"
            placeholder="Nhập tuổi sinh viên"
          />
        </div>
        {/* score */}
        <div className="form-group">
          <label htmlFor="score">Score</label>
          <input
            className="form-control"
            type="number"
            id="score"
            placeholder="Nhập điểm sinh viên"
          />
        </div>
        <button className="btn btn-primary my-2" type="submit">
          Thêm sinh viên
        </button>
      </form>

      <div className="row">
        {students.map((item, index) => {
          let { id, age, name, score } = item;
          return (
            <Student
              id={id}
              key={index}
              name={name}
              age={age}
              score={score}
              deleteStudent={deleteStudent}
            />
          );
        })}
        {/* {students.map((item) => (
            <Student 
                name={item.name} 
                age={item.age} 
                score={item.score}/>
        ))} */}
      </div>
    </div>
  );
}