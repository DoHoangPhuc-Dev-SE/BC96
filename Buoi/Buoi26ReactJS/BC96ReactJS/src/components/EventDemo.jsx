import React from "react";

export default function EventDemo() {
  const handleClick = () => {
    alert("Bạn vừa click vào button!");
  };
  const showMessage = (name) => {
    alert("hello " + name);
  };
  const handleClickEvent = (event) => {
    console.log(event.target);
  };
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    console.log("👉 event.target.checked", event.target.checked);
  };
  
  const isAdmin = false;
  let accountName = "";
  
  const changeName = () => { 
    accountName = "Đỗ Phúc"
    
    console.log("👉 accountName", accountName);
   }
  return (
    <div className="container my-4">
      <h2>onClick</h2>
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary" onClick={handleClick}>
          click
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            showMessage("Phúc");
          }}
        >
          Chào Phúc
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            alert("Hello React");
          }}
        >
          click
        </button>
      </div>

      <div className="">
        <button
          className="btn btn-outline-success m-3"
          onClick={handleClickEvent}
        >
          Event
        </button>
      </div>
      <hr />
      <h2>onChange</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="iName">
          Name
        </label>
        <input
          id="iName"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <label className="form-label">Thành phố</label>

      <select onChange={handleChange}>
        <option value="HCM">HCM</option>
        <option value="HN">HN</option>
        <option value="DN">DN</option>
        <option value="QN">QN</option>
        <option value="BD">BD</option>
      </select>

      {/* Checkbox */}
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="agree"
          onChange={handleCheckboxChange}
        />

        <label className="form-check-label" htmlFor="agree">
          Đồng ý điều khoản
        </label>
      </div>

      {isAdmin && <p>Quản trị viên</p>}

      <p>Hello {accountName || "Chưa có tên"}</p>
          {/*  ! falsy => true  */}
      {!accountName && (
        <button className="btn btn-sm btn-outline-primary" onClick={changeName}>Change name</button>
      )}
    </div>
    //  radio , select , date, number,text => taget.value
    // checkbox => target.checked
  );
}