import React from "react";
import Card from "./Card";

export default function Content() {
  return (
    <div
      className=""
      style={{
        background: "blue",
        height: "500px",
        width: "100%",
      }}
    >
      <h2 className="fw-bold">Content</h2>
      <div className="d-flex align-items-center h-100">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}