import { Button } from "antd";
import BearCounter from "../components/demo/BearCounter.jsx";
import Controls from "../components/demo/Controls.jsx";
import useCounter from "../hooks/useCounter.jsx";
import TestHook from "../components/TestHook.jsx";

export default function Home() {
  // sử dung custom hook

  const { count, decrement, increment } = useCounter(10); // giá trị khởi tạo là 10

  return (
    <div>
      <h1 className="text-center text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
      <BearCounter />
      <Controls />

      <h1 className="text-3xl font-bold">{count}</h1>
      <div className="flex gap-2">
        <Button size="small" type="primary" onClick={increment}>
          Tăng
        </Button>
        <Button size="small" type="primary" onClick={decrement}>
          Giảm
        </Button>
      </div>
      <hr />
      <TestHook />

    </div>
  );
}
