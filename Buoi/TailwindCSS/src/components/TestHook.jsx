import React from "react";
import useCounter from "../hooks/useCounter";
import { Button } from "antd";

export default function TestHook() {
  const { count, decrement, increment } = useCounter(99); 
  // giá trị khởi tạo là 99
  return (
    <div>
      <h1 className="text-3xl font-bold">{count}</h1>
      <div className="flex gap-2">
        <Button size="small" type="primary" onClick={increment}>
          Tăng
        </Button>
        <Button size="small" type="primary" onClick={decrement}>
          Giảm
        </Button>
      </div>
    </div>
  );
}
