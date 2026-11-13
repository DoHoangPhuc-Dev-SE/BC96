import React, { useState } from 'react'

// custom hook: tăng giảm biến đếm
//initialValue : giá trị khởi tạo

// Lưu ý khi dùng hook
// chỉ sử dụng ở cấp cao nhất của component
// không gọi hook trong vòng lặp, điều kiện, hay function lồng nhau
// chỉ gọi hook trong function component hoặc custom hook khác
// tên bắt đầu bằng "use" 
export default function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue)
    // hàm tăng 
    const increment = ()=> setCount(count + 1)
    // hàm giảm
    const decrement = ()=> setCount(count - 1)
  return {count, increment, decrement}
}
