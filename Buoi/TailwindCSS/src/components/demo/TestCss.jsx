import React from 'react'
import style from "./TestCss.module.css"
export default function TestCss() {
  return (
    <div>
      <h1 className={style.title}>TestCss</h1>
      <h1 className='_title_15nh7_1'>Hello</h1>
      <button className={style.button}>Test</button>
    </div>
  )
}


// export default : trong file chỉ có 1 export default
// sử dụng =  cách import ten_component form "./...."
// có thể đổi tên tuỳ ý ở phần import ten_component_khác 
// chỉ cần đúng from './...' là sẽ hoạt động được
