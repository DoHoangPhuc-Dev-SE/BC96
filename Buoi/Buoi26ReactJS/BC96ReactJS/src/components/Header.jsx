import React from "react";

//  cách dùng
//  <Header/>
// JSX: javascript + html

// QUY TẮC JSX :
// class    => className
// for      => htmlFor
// text-align => textAlign

export default function Header() {
  // tạo object css
  const h2Style = {
    color: 'blue',
    fontSize: '30px',
    textAlign: 'center'
  };

  return (
    <div>
      <h1 className="text-danger" style={{ textAlign: "center" }}>
        Header
      </h1>
      <h2 style ={h2Style}>CyberSoft</h2>
    </div>
  );
}