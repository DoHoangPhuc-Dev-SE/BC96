import React, { useState } from "react";

export default function StateDemo() {
  let accName = "";
  const handleChangeName = () => {
    accName = "Đỗ Ph";
    console.log("👉 accName", accName);
  };

  //  state
  // useState : hook
  const [username, setUserName] = useState("");

  // biến lưu giá trị count
  const [count, setCount] = useState(0);
  // có 2 button tăng 1 , gỉam 1
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const [fontSize, setFontSize] = useState(16);
  const changeFonsize = (value) => {
    setFontSize(fontSize + value);
  };
// like không giá trị mặc định
// useState(0) gán giá trị ban đầu cho like = 0
  const [like, setLike] = useState(0);
  
  console.log("👉 like", like);
  const changeLike = (isLike) => {
    if (isLike) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  };
  return (
    <div className="container m-4">
      <h2>biến thường</h2>
      <p>accname: {accName || "Chua co ten"}</p>
      <button
        className="btn btn-sm btn-outline-primary"
        onClick={handleChangeName}
      >
        Change accName
      </button>

      <hr />
      <h2>State</h2>
      <p>username: {username || "Chua co ten"}</p>
      <button
        className="btn btn-sm btn-outline-primary"
        onClick={() => {
          setUserName("Đỗ Phúc");
        }}
      >
        Change username
      </button>

      <hr />
      <h2>Count</h2>
      <h1>{count}</h1>
      <div>
        <button className="btn btn-success me-2" onClick={decrease}>
          -
        </button>
        <button className="btn btn-primary me-2" onClick={increase}>
          +
        </button>
      </div>
      <hr />
      <h2>BT thực hành</h2>
      <p style={{ fontSize: `${fontSize}px` }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
        quisquam.
      </p>
      <button
        className="btn btn-success me-2"
        onClick={() => {
          changeFonsize(2);
        }}
      >
        Zoom in
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => {
          changeFonsize(-2);
        }}
      >
        Zoom out
      </button>
      <hr />
      <div>
        <h2>Tinker App</h2>
        <div className="card text-start col-4">
          <img
            className="card-img-top"
            // src={`https://i.pravatar.cc?u=${like}`}
            src={`https://i.pravatar.cc?u=${like}`}
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Bob</h4>
            <p className="card-text">Lorem, ipsum dolor.</p>
            <p>
              <b>Like: </b>
              {like}
            </p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-warning me-2"
              onClick={() => {
                changeLike(false);
              }}
            >
              Dislike
            </button>
            <button
              className="btn btn-success me-2"
              onClick={() => {
                changeLike(true);
              }}
            >
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}